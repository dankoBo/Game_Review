import { Rating } from '@smastrom/react-rating';
import { useState } from 'react'

const GameRating = () => {
    const [rating, setRating] = useState(0)

    return (
        <Rating 
            style={{ maxWidth: 250 }} 
            value={rating} 
            onChange={setRating} 
            items={10}
        />
    );
}
 
export default GameRating;