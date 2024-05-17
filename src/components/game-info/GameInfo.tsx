import Button from '@/UI/buttons/primary-btn/Button';
import { useState } from 'react'
import { S_Container, S_UploadAndRate, S_InputWrapper, S_FileInput, S_Input, S_TextArea, S_ButtonsContainer } from '@/components/game-info/GameInfo.styled';
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { app } from '@/firebase';
import { useGameInfo } from '@/store/game-info.store';
import { v4 as uuidv4 } from 'uuid';

const GameInfo = () => {
    const [name, setName] = useState('');
    const [genre, setGenre] = useState('');
    const [review, setReview] = useState('');
    const [rating, setRating] = useState('')
    const closeGameInfo = useGameInfo(state => state.closeGameInfo);
    const db = getFirestore(app);
    const storage = getStorage(app);

    const handleCloseGameInfo = () => {
        closeGameInfo();
    }

    const handleSaveGameInfo = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const gameData = new FormData(event.currentTarget);
            
            const fileInput = event.currentTarget.querySelector('input[type=file]') as HTMLInputElement;
            if (fileInput && fileInput.files && fileInput.files.length > 0) {
                const file = fileInput.files[0];
                const storageRef = ref(storage, `images/${file.name}`);
                await uploadBytes(storageRef, file);
                const imageUrl = await getDownloadURL(storageRef);

                 // Отримання тексту рецензії та його заміна
                const reviewText = gameData.get('review') as string;
                const reviewFormatted = reviewText.replace(/\n/g, '\\n');
    
                const data = {
                    id: uuidv4(),
                    image: imageUrl,
                    name: gameData.get('name'),
                    genre: gameData.get('genre'),
                    review: reviewFormatted,
                    rating: gameData.get('rating')
                };
                
                await setDoc(doc(db, "games", data.id), data);
                console.log("Документ записано");
                // Скидання стану після відправки форми
                setName('');
                setGenre('');
                setReview('');
                setRating('');
                fileInput.value = '';
            } else {
                console.error("Документ не знайдено");
            }
            
        } catch(error) {
            console.error("Помилка запису документа: ", error);
        }
    }

    return (
        <S_Container>
            <form onSubmit={handleSaveGameInfo}>
                <S_UploadAndRate>
                    <S_InputWrapper width="300px">
                        <S_FileInput type="file" accept=".png" name='image' />
                    </S_InputWrapper>
                    <S_InputWrapper width="100px">
                        <S_Input type="text" placeholder='Рейтинг' name='rating' value={rating}  onChange={e => setRating(e.target.value)} />
                    </S_InputWrapper>
                </S_UploadAndRate>
                <S_InputWrapper>
                    <S_Input type="text" placeholder='Назва' name='name' value={name} onChange={e => setName(e.target.value)} />
                </S_InputWrapper>
                <S_InputWrapper>
                    <S_Input type="text" placeholder='Жанр' name='genre' value={genre} onChange={e => setGenre(e.target.value)} />
                </S_InputWrapper>
                <S_InputWrapper>
                    <S_TextArea cols={30} rows={10} placeholder="Рецензія" name='review' value={review} onChange={e => setReview(e.target.value)} />
                </S_InputWrapper>
                <S_ButtonsContainer>
                    <Button
                        type='submit'
                        name="Зберегти"
                        primary
                    />
                    <Button
                        type='button' 
                        name="Скасувати"
                        onClick={handleCloseGameInfo}
                    />
                </S_ButtonsContainer>
            </form>
        </S_Container>
    );
}
 
export default GameInfo;