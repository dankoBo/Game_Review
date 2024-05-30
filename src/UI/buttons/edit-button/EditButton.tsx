import { S_Button } from './EditButton.styled';
import { RiFileEditLine } from "react-icons/ri";


type EditButtonProps = {

}

const EditButton = () => {
    return (
        <S_Button>
            <RiFileEditLine />
        </S_Button>
    )
}
 
export default EditButton;