import { S_Input } from '@/UI/form-input/FormInput.styled';
import { FC } from 'react';

type FormInputProps = {
    type: string;
    placeholder: string;
    name?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput: FC<FormInputProps> = (props) => {
    return <S_Input 
                type={props.type}
                placeholder={props.placeholder}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
            />;
}
 
export default FormInput;
