import { S_Button } from './EditButton.styled';
import { RiFileEditLine } from "react-icons/ri";

type EditButtonProps = {
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

const EditButton: FC<EditButtonProps> = (props) => {
    return <S_Button onClick={props.onClick}><RiFileEditLine /></S_Button>
}
 
export default EditButton;