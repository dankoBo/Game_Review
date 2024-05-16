import { useState } from 'react';
import { Rating, ThinStar } from '@smastrom/react-rating';

const GameRating = () => {
    const [rating, setRating] = useState(0); // Створення стану для зберігання значення рейтингу

    const customStyles = {
        itemShapes: ThinStar,
        activeFillColor: ['#FEE2E2', '#FFEDD5', '#FEF9C3', '#ECFCCB', '#D1FAE5', '#FEE2E2', '#FFEDD5', '#FEF9C3', '#ECFCCB', '#D1FAE5'],
        activeBoxColor: ['#da1600', '#da1600', '#da1600', '#db711a', '#db711a','#db711a','#db711a', '#009664', '#009664', '#009664'],
        activeBoxBorderColor: ['#da1600', '#da1600', '#da1600', '#db711a', '#db711a','#db711a', '#db711a', '#009664', '#009664', '#009664'],
        inactiveFillColor: 'white',
        inactiveBoxColor: '#dddddd',
        inactiveBoxBorderColor: '#a8a8a8'
    }

    // Функція для оновлення значення рейтингу
    const handleInputChange = (event) => {
        const inputValue = parseFloat(event.target.value);
        if (!isNaN(inputValue)) {
            setRating(inputValue);
        }
    }

    return (
        <div>
            <input type="text" onChange={handleInputChange} />
            <Rating readOnly
                itemStyles={customStyles}
                style={{ maxWidth: 250 }}
                value={rating}
                items={10}
                spaceBetween="small"
                halfFillMode="box"
            />
        </div>
    );
}

export default GameRating;