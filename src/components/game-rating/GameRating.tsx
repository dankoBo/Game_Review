import { Rating, ThinStar } from '@smastrom/react-rating';
import { FC } from 'react';

type GameRatingProps = {
    rating: number;
};

const GameRating: FC<GameRatingProps> = ({ rating }) => {
    const customStyles = {
        itemShapes: ThinStar,
        activeFillColor: [
            '#FFFFFF',
            '#FFFFFF',
            '#FFFFFF',
            '#FFFFFF',
            '#FFFFFF',
            '#FFFFFF',
            '#FFFFFF',
            '#FFFFFF',
            '#FFFFFF',
            '#FFFFFF',
        ],
        activeBoxColor: [
            '#DA1600',
            '#DA1600',
            '#DA1600',
            '#DB711a',
            '#DB711a',
            '#DB711a',
            '#DB711a',
            '#009664',
            '#009664',
            '#009664',
        ],
        activeBoxBorderColor: [
            '#DA1600',
            '#DA1600',
            '#DA1600',
            '#DB711a',
            '#DB711a',
            '#DB711a',
            '#DB711a',
            '#009664',
            '#009664',
            '#009664',
        ],
        inactiveFillColor: 'white',
        inactiveBoxColor: '#dddddd',
        inactiveBoxBorderColor: '#a8a8a8',
    };

    return (
        <>
            <Rating
                readOnly
                itemStyles={customStyles}
                style={{ maxWidth: 250 }}
                value={rating}
                items={10}
                spaceBetween="small"
                halfFillMode="box"
            />
        </>
    );
};

export default GameRating;
