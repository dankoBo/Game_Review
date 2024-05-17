import { S_Container, S_Content, S_CardFront, S_CardHeading, S_Caption, S_CardBack, S_Img, S_Title, S_Genre, S_Review } from './GameCardRotate.styled';
import { FC, ReactNode } from 'react';
import GameRating from '@/components/game-rating/GameRating';
import '@smastrom/react-rating/style.css';

type CardProps = {
    img: string;
    title: string;
    genre: string;
    review: ReactNode;
}

const GameCardRotate:FC<CardProps> = ({ img, title, genre, review }) => {
    return (
        <S_Container>
            <S_Content>
                <S_CardFront>
                    <S_Img src={img} alt="game image" />
                </S_CardFront>
                <S_CardBack>
                    <S_CardHeading>
                        <S_Caption>
                            <S_Title>{title}</S_Title>
                            <S_Genre>{genre}</S_Genre>
                        </S_Caption>
                        <GameRating />
                    </S_CardHeading>
                    <S_Review>{review}</S_Review>
                </S_CardBack>
            </S_Content>
        </S_Container>
    );
}
 
export default GameCardRotate;