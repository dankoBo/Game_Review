import { ReactNode, useState } from 'react';
import GameRating from '@/components/game-rating/GameRating';
import { MdEditDocument, MdDelete } from 'react-icons/md';
import { useGameInfo } from '@/store/game-info.store';
import { useAdminPanel } from '@/store/admin-panel.store';
import { useEditGameInfo } from '@/store/edit-game-info.store';
import { useGamesData } from '@/hooks/useGamesData';
import { useGameDelete } from '@/hooks/useGameDelete';
import { useToaster } from '@/store/toaster.store';
import '@smastrom/react-rating/style.css';
import {
    S_CardContainer,
    S_Card,
    S_FrontContent,
    S_Content,
    S_CardHeading,
    S_Caption,
    S_CardTitle,
    S_Title,
    S_Genre,
    S_RatingAndControls,
    S_EditDeleteButtons,
    S_Review,
} from './GameCard.styled';
import IconButton from '@/UI/buttons/icon-button/IconButton';

type CardProps = {
    id: string;
    title: string;
    genre: string;
    name: string;
    rating: number;
    review: ReactNode;
};

const GameCardRotate = ({
    id,
    title,
    rating,
    name,
    genre,
    review,
}: CardProps) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const { games } = useGamesData();
    const deleteGame = useGameDelete();
    const { openGameInfo } = useGameInfo();
    const { isAdminPanelOpen } = useAdminPanel();
    const { setSelectedGame } = useEditGameInfo();
    const selected = games.find((game) => game.id === id);
    const setToasterType = useToaster((state) => state.setToasterType);

    const rotateCard = () => {
        if (window.innerWidth <= 768) {
            setIsExpanded(!isExpanded);
        }
    };

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
        <S_CardContainer onClick={rotateCard}>
            <S_Card>
                <S_FrontContent $isExpanded={isExpanded}>
                    <S_CardTitle>{title}</S_CardTitle>
                </S_FrontContent>
                <S_Content $isExpanded={isExpanded}>
                    <S_CardHeading>
                        <S_Caption>
                            <S_Title>{name}</S_Title>
                            <S_Genre>{genre}</S_Genre>
                        </S_Caption>
                        <S_RatingAndControls>
                            <GameRating rating={rating} />
                            {isAdminPanelOpen && (
                                <S_EditDeleteButtons>
                                    <IconButton
                                        color="#00674F"
                                        icon={MdEditDocument}
                                        onClick={editHandleclick}
                                    />
                                    <IconButton
                                        color="#e94560"
                                        icon={MdDelete}
                                        onClick={deleteHandleClick}
                                    />
                                </S_EditDeleteButtons>
                            )}
                        </S_RatingAndControls>
                    </S_CardHeading>
                    <S_Review>{review}</S_Review>
                </S_Content>
            </S_Card>
        </S_CardContainer>
    );
};

export default GameCardRotate;
