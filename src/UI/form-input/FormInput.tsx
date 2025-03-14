import { S_Input, S_ErrorMessage } from '@/UI/form-input/FormInput.styled';

type FormInputProps = {
    type: string;
    placeholder: string;
    name?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    error?: boolean;
    helperText?: string;
};

const FormInput: React.FC<FormInputProps> = (props) => {
    return (
        <>
            <S_Input
                type={props.type}
                placeholder={props.placeholder}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
            />
            {props.helperText && (
                <S_ErrorMessage>
                    {props.helperText}
                </S_ErrorMessage>
            )}
        </>
        
    );
};

export default FormInput;
