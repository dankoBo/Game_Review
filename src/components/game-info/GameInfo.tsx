import { useState, useEffect } from 'react';
import { app } from '@/firebase/firebase';
import { getFirestore, doc, setDoc, updateDoc } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';
import { useGameInfo } from '@/store/game-info.store';
import { useEditGameInfo } from '@/store/edit-game-info.store';
import { useToaster } from '@/store/toaster.store';
import Button from '@/UI/buttons/primary-button/PrimaryButton';
import FormInput from '@/UI/form-input/FormInput';
import {
    S_GameContainer,
    S_GameForm,
    S_UploadAndRate,
    S_GameInput,
    S_GameTextArea,
    S_GameButtons,
} from '@/components/game-info/GameInfo.styled';

const GameInfo = () => {
    const { selectedGame, clearSelectedGame } = useEditGameInfo();
    const [title, setTitle] = useState('');
    const [name, setName] = useState('');
    const [rating, setRating] = useState('');
    const [genre, setGenre] = useState('');
    const [review, setReview] = useState('');
    const closeGameInfo = useGameInfo((state) => state.closeGameInfo);
    const setToasterType = useToaster((state) => state.setToasterType);
    const db = getFirestore(app);

    useEffect(() => {
        if (selectedGame) {
            setTitle(selectedGame.title);
            setName(selectedGame.name);
            setRating(String(selectedGame.rating));
            setGenre(selectedGame.genre);
            setReview(selectedGame.review);
        }
    }, [selectedGame]);

    const handleCloseGameInfo = () => {
        clearSelectedGame();
        closeGameInfo();
    };

    const handleSaveGameInfo = async (
        event: React.FormEvent<HTMLFormElement>,
    ) => {
        event.preventDefault();
        try {
            const gameData = new FormData(event.currentTarget);
            const reviewText = gameData.get('review') as string;
            const reviewFormatted = reviewText.replace(/\n/g, '\\n');

            const data = {
                title: gameData.get('title'),
                name: gameData.get('name'),
                rating: gameData.get('rating'),
                genre: gameData.get('genre'),
                review: reviewFormatted,
            };

            if (selectedGame) {
                await updateDoc(doc(db, 'games', selectedGame.id), data);
                setToasterType('gameEdited');
            } else {
                const newGameData = { ...data, id: uuidv4() };
                await setDoc(doc(db, 'games', newGameData.id), newGameData);
                setToasterType('gameAdded');
            }

            setTitle('');
            setName('');
            setRating('');
            setGenre('');
            setReview('');
        } catch (error) {
            console.error('Помилка запису документа: ', error);
            setToasterType('errorMessage');
        }
    };

    return (
        <S_GameContainer>
            <S_GameForm onSubmit={handleSaveGameInfo}>
                <S_UploadAndRate>
                    <S_GameInput width="300px">
                        <FormInput
                            type="text"
                            placeholder="Назва обкладинки"
                            name="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </S_GameInput>
                    <S_GameInput width="130px">
                        <FormInput
                            type="text"
                            placeholder="Рейтинг 1-10"
                            name="rating"
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                        />
                    </S_GameInput>
                </S_UploadAndRate>
                <div>
                    <FormInput
                        type="text"
                        placeholder="Назва гри"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <FormInput
                        type="text"
                        placeholder="Жанр"
                        name="genre"
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)}
                    />
                </div>
                <div>
                    <S_GameTextArea
                        cols={30}
                        rows={10}
                        placeholder="Рецензія"
                        name="review"
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                    />
                </div>
                <S_GameButtons>
                    <Button type="submit" name="Зберегти" btnColor="#1E90FF" />
                    <Button
                        type="button"
                        name="Скасувати"
                        btnColor="#FF4500"
                        onClick={handleCloseGameInfo}
                    />
                </S_GameButtons>
            </S_GameForm>
        </S_GameContainer>
    );
};

export default GameInfo;
