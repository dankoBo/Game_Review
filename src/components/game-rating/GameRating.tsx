import { Rating, ThinStar } from '@smastrom/react-rating';
import { FC } from 'react'

type GameRatingProps = {
    rating: number;
};

const GameRating:FC<GameRatingProps> = ({ rating }) => {
    const customStyles = {
        itemShapes: ThinStar,
        activeFillColor: ['#FEE2E2', '#FFEDD5', '#FEF9C3', '#ECFCCB', '#D1FAE5', '#FEE2E2', '#FFEDD5', '#FEF9C3', '#ECFCCB', '#D1FAE5'],
        activeBoxColor: ['#da1600', '#da1600', '#da1600', '#db711a', '#db711a','#db711a','#db711a', '#009664', '#009664', '#009664'],
        activeBoxBorderColor: ['#da1600', '#da1600', '#da1600', '#db711a', '#db711a','#db711a', '#db711a', '#009664', '#009664', '#009664'],
        inactiveFillColor: 'white',
        inactiveBoxColor: '#dddddd',
        inactiveBoxBorderColor: '#a8a8a8'
    }

    return (
        <>
            <Rating readOnly
                itemStyles={customStyles}
                style={{ maxWidth: 250 }}
                value={rating}
                items={10}
                spaceBetween="small"
                halfFillMode="box"
            />
        </>
    );
}

export default GameRating;