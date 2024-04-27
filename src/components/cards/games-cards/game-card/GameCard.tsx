import { FC } from 'react';
import { S_Container, S_Content, S_Img, S_Title, S_Genre, S_Review } from './GameCard.styled';

type CardProps = {
    img: string;
    title: string;
    genre: string;
    review: string;
}

const GameCard:FC<CardProps> = ({ img, title, genre, review }) => {
    return (
        <S_Container>
            <S_Img src={img} alt="game image" />
            <S_Content>
                <S_Title>{title}</S_Title>
                <S_Genre>{genre}</S_Genre>
                <S_Review>{review}</S_Review>
            </S_Content>
        </S_Container>
    );
}
 
export default GameCard;