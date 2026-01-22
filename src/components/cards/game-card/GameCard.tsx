import { FC, ReactNode } from 'react';
import { useGamesData } from '@/hooks/useGamesData';
import { useGameInfo } from '@/store/game-info.store';
import { useAdminPanel } from '@/store/admin-panel.store';
import { useEditGameInfo } from '@/store/edit-game-info.store';
import { useGameDelete } from '@/hooks/useGameDelete';
import GameRating from '@/components/game-rating/GameRating';
import EditButton from '@/UI/buttons/edit-button/EditButton';
import { useToaster } from '@/store/toaster.store';
import DeleteButton from '@/UI/buttons/delete-button/DeleteButton';

import {
    S_CardContainer,
    S_Card,
    S_CardTitle,
    S_CardContent,
    S_CardHeading,
    S_Caption,
    S_Title,
    S_Genre,
    S_RatingAndControls,
    S_EditDeleteButtons,
    S_CardReview,
} from './GameCard.styled';

type CardProps = {
    id: string;
    title: string;
    rating: number;
    name: string;
    genre: string;
    review: ReactNode;
};

const GameCard: FC<CardProps> = ({ id, title, rating, name, genre, review }) => {
    const { isAdminPanelOpen } = useAdminPanel();
    const { games } = useGamesData();
    const { setSelectedGame } = useEditGameInfo();
    const { openGameInfo } = useGameInfo();
    const deleteGame = useGameDelete();
    const setToasterType = useToaster((state) => state.setToasterType);
    const selected = games.find((game) => game.id === id);

    const editHandleclick = () => {
        if (selected) {
            setSelectedGame(selected);
            openGameInfo();
        }
    };

    const deleteHandleClick = async () => {
        if (selected?.id) {
            try {
                await deleteGame(selected.id);
                setToasterType('gameDeleted');
            } catch (error) {
                console.error('Помилка видалення гри:', error);
                setToasterType('errorMessage');
            }
        }
    };

    return (
        <S_CardContainer>
            <S_Card>
                <S_CardTitle>{title}</S_CardTitle>
                <S_CardContent>
                    <S_CardHeading>
                        <S_Caption>
                            <S_Title>{name}</S_Title>
                            <S_Genre>{genre}</S_Genre>
                        </S_Caption>
                        <S_RatingAndControls>
                            <GameRating rating={rating} />
                            {isAdminPanelOpen && (
                                <S_EditDeleteButtons>
                                    <EditButton onClick={editHandleclick} />
                                    <DeleteButton onClick={deleteHandleClick} />
                                </S_EditDeleteButtons>
                            )}
                        </S_RatingAndControls>
                    </S_CardHeading>
                    <S_CardReview>{review}</S_CardReview>
                </S_CardContent>
            </S_Card>
        </S_CardContainer>
    );
};

export default GameCard;
