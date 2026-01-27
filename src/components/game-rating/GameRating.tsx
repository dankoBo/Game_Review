import { Rating, ThinStar } from '@smastrom/react-rating';

type GameRatingProps = {
    rating: number;
};

const GameRating = ({ rating }: GameRatingProps) => {
    const customStyles = {
        itemShapes: ThinStar,
        activeFillColor: '#f59aff',
        activeBoxColor: 'transparent',
        activeBoxBorderColor: 'transparent',
        inactiveFillColor: 'rgba(255, 255, 255, 0.1)',
        inactiveBoxColor: 'transparent',
        inactiveBoxBorderColor: 'transparent',
    };

    return (
        <div
            style={{ filter: 'drop-shadow(0 0 2px rgba(245, 154, 255, 0.5))' }}
        >
            <Rating
                readOnly
                itemStyles={customStyles}
                style={{ maxWidth: 250 }}
                value={rating}
                items={10}
                spaceBetween="small"
                halfFillMode="box"
            />
        </div>
    );
};

export default GameRating;
