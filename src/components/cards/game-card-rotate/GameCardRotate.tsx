import {
    S_Container,
    S_Content,
    S_CardFront,
    S_CardHeading,
    S_Caption,
    S_CardBack,
    S_EditDeleteButtons,
    S_Img,
    S_Title,
    S_Genre,
    S_Review,
} from './GameCardRotate.styled';
import '@smastrom/react-rating/style.css';
import { FC, ReactNode, useState } from 'react';
import GameRating from '@/components/game-rating/GameRating';
import EditButton from '@/UI/buttons/edit-button/EditButton';
import DeleteButton from '@/UI/buttons/delete-button/DeleteButton';
import { useGameInfo } from '@/store/game-info.store';
import { useAdminPanel } from '@/store/admin-panel.store';
import { useEditGameInfo } from '@/store/edit-game-info.store';
import { useGamesData } from '@/hooks/useGamesData';
import { useGameDelete } from '@/hooks/useGameDelete';

type CardProps = {
    id: string;
    img: string;
    rating: number;
    title: string;
    genre: string;
    review: ReactNode;
};

const GameCardRotate: FC<CardProps> = ({
    id,
    img,
    rating,
    title,
    genre,
    review,
}) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const { setSelectedGame } = useEditGameInfo();
    const { openGameInfo } = useGameInfo();
    const { isAdminPanelOpen } = useAdminPanel();
    const deleteGame = useGameDelete();
    const gamesFromDB = useGamesData();
    const selected = gamesFromDB.find((game) => game.id === id);

    const rotateCard = () => {
        if (window.innerWidth <= 768) {
            setIsFlipped(!isFlipped);
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
            deleteGame(selected.id);
        }
    };

    return (
        <S_Container onClick={rotateCard}>
            <S_Content $isFlipped={isFlipped}>
                <S_CardFront>
                    <S_Img src={img} alt="game image" />
                </S_CardFront>
                <S_CardBack>
                    <S_CardHeading>
                        <S_Caption>
                            <S_Title>{title}</S_Title>
                            <S_Genre>{genre}</S_Genre>
                        </S_Caption>
                        <GameRating rating={rating} />
                        {isAdminPanelOpen && (
                            <S_EditDeleteButtons>
                                <EditButton onClick={editHandleclick} />
                                <DeleteButton onClick={deleteHandleClick} />
                            </S_EditDeleteButtons>
                        )}
                    </S_CardHeading>
                    <S_Review>{review}</S_Review>
                </S_CardBack>
            </S_Content>
        </S_Container>
    );
};

export default GameCardRotate;
