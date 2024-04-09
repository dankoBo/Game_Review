import Button from '../../UI/buttons/primary-btn/Button';
import { S_Container, S_InputWrapper, S_FileInput, S_TextInput, S_TextArea, S_ButtonsContainer } from './GameInfo.styled';
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { app } from '../../firebase';
import { useGameInfo } from '../../store/game-info.store';

const GameInfo = () => {
    const closeGameInfo = useGameInfo(state => state.closeGameInfo)
    const db = getFirestore(app)
    const storage = getStorage(app)

    const handleCloseGameInfo = () => {
        closeGameInfo()
    }

    const handleSaveGameInfo = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const gameData = new FormData(event.currentTarget)
            
            const fileInput = event.currentTarget.querySelector('input[type=file]')
            const file = fileInput.files[0];
            const storageRef = ref(storage, `images/${file.name}`)
            await uploadBytes(storageRef, file)
            const imageUrl = await getDownloadURL(storageRef)

            const data = {
                image: imageUrl,
                name: gameData.get('name'),
                genre: gameData.get('genre'),
                review: gameData.get('review'),
            };
            
            await setDoc(doc(db, "games", data.name), data);
            console.log("Документ записано");
            
        } catch(error) {
            console.error("Помилка запису документа: ", error);
        }
    }

    return (
        <S_Container>
            <form onSubmit={handleSaveGameInfo}>
                <S_InputWrapper>
                    <S_FileInput type="file" accept=".png" name='image' />
                </S_InputWrapper>
                <S_InputWrapper>
                    <S_TextInput type="text" placeholder='Назва' name='name'/>
                </S_InputWrapper>
                <S_InputWrapper>
                    <S_TextInput type="text" placeholder='Жанр' name='genre'/>
                </S_InputWrapper>
                <S_InputWrapper>
                    <S_TextArea cols={30} rows={10} placeholder="Рецензія" name='review'></S_TextArea>
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


    // const docRef = doc(db, "countries", "1");

    // // Дані для запису
    // const data = {
    //     name: "Україна",
    //     capital: "Київ",
    //     population: 44100000
    // };

    // // Запис даних в документ
    // setDoc(docRef, data)
    //     .then(() => {
    //         console.log("Документ успішно записано!");
    //     })
    //     .catch((error) => {
    //         console.error("Помилка запису документа: ", error);
    //     });