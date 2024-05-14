import { FC, ReactNode } from 'react';
import { S_Container, S_Content, S_Img, S_Title, S_Genre, S_Review } from '@/components/cards/games-cards/game-card/GameCard.styled';
// import GameRating from '@/components/game-rating/GameRating';
import '@smastrom/react-rating/style.css';


type CardProps = {
    img: string;
    title: string;
    genre: string;
    review: ReactNode;
}

const GameCard:FC<CardProps> = ({ img, title, genre, review }) => {
    return (
        <S_Container>
            <S_Img src={img} alt="game image" />
            <S_Content>
                <S_Title>{title}</S_Title>
                <S_Genre>{genre}</S_Genre>
                {/* <GameRating /> */}
                <S_Review>{review}</S_Review>
            </S_Content>
        </S_Container>
    );
}
 
export default GameCard;
