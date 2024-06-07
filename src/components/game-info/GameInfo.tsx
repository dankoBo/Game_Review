import { S_Container, S_Form, S_UploadAndRate, S_InputWrapper, S_FileInput, S_TextArea, S_ButtonsContainer } from '@/components/game-info/GameInfo.styled';
import { useState, useEffect } from 'react';
import Button from '@/UI/buttons/primary-btn/Button';
import FormInput from '@/UI/form-input/FormInput';
import { getFirestore, doc, setDoc, updateDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { app } from '@/firebase';
import { useGameInfo } from '@/store/game-info.store';
import { useEditGameInfo } from '@/store/edit-game-info.store';
import { v4 as uuidv4 } from 'uuid';

const GameInfo = () => {
    const { selectedGame } = useEditGameInfo();
    const [name, setName] = useState('');
    const [genre, setGenre] = useState('');
    const [review, setReview] = useState('');
    const [rating, setRating] = useState('');
    const closeGameInfo = useGameInfo(state => state.closeGameInfo);
    const db = getFirestore(app);
    const storage = getStorage(app);

    useEffect(() => {
        if (selectedGame) {
            setName(selectedGame.name);
            setGenre(selectedGame.genre);
            setReview(selectedGame.review);
            setRating(String(selectedGame.rating));
        }
    }, [selectedGame]);

    const handleCloseGameInfo = () => {
        closeGameInfo();
    }

    const handleSaveGameInfo = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const gameData = new FormData(event.currentTarget);

            const fileInput = event.currentTarget.querySelector('input[type=file]') as HTMLInputElement;
            let imageUrl = selectedGame?.image || '';
            if (fileInput && fileInput.files && fileInput.files.length > 0) {
                const file = fileInput.files[0];
                const storageRef = ref(storage, `images/${file.name}`);
                await uploadBytes(storageRef, file);
                imageUrl = await getDownloadURL(storageRef);
            }

            const reviewText = gameData.get('review') as string;
            const reviewFormatted = reviewText.replace(/\n/g, '\\n');

            const data = {
                rating: gameData.get('rating'),
                image: imageUrl,
                name: gameData.get('name'),
                genre: gameData.get('genre'),
                review: reviewFormatted,
            };

            if (selectedGame) {
                // Update existing game
                await updateDoc(doc(db, "games", selectedGame.id), data);
                console.log("Документ оновлено");
            } else {
                // Add new game
                const newGameData = { ...data, id: uuidv4() };
                await setDoc(doc(db, "games", newGameData.id), newGameData);
                console.log("Документ записано");
            }

            setName('');
            setGenre('');
            setReview('');
            setRating('');
            fileInput.value = '';
        } catch (error) {
            console.error("Помилка запису документа: ", error);
        }
    }

    return (
        <S_Container>
            <S_Form onSubmit={handleSaveGameInfo}>
                <S_UploadAndRate>
                    <S_InputWrapper width="300px">
                        <S_FileInput type="file" accept=".avif" name='image' />
                    </S_InputWrapper>
                    <S_InputWrapper width="100px">
                        <FormInput
                            type="text"
                            placeholder='Рейтинг'
                            name='rating'
                            value={rating}
                            onChange={e => setRating(e.target.value)}
                        />
                    </S_InputWrapper>
                </S_UploadAndRate>
                <div>
                    <FormInput
                        type="text"
                        placeholder='Назва'
                        name='name'
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div>
                    <FormInput
                        type="text"
                        placeholder='Жанр'
                        name='genre'
                        value={genre}
                        onChange={e => setGenre(e.target.value)}
                    />
                </div>
                <div>
                    <S_TextArea
                        cols={30}
                        rows={10}
                        placeholder="Рецензія"
                        name='review'
                        value={review}
                        onChange={e => setReview(e.target.value)}
                    />
                </div>
                <S_ButtonsContainer>
                    <Button
                        type='submit'
                        name="Зберегти"
                        btnColor='#1E90FF'
                    />
                    <Button
                        type='button'
                        name="Скасувати"
                        btnColor='#FF4500'
                        onClick={handleCloseGameInfo}
                    />
                </S_ButtonsContainer>
            </S_Form>
        </S_Container>
    );
}

export default GameInfo;