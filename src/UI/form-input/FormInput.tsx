import { S_Input, S_ErrorMessage } from '@/UI/form-input/FormInput.styled';

type FormInputProps = {
    type: string;
    placeholder: string;
    title?: string;
    name?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    error?: boolean;
    helperText?: string;
};

const FormInput = ({
    type,
    placeholder,
    title,
    name,
    value,
    onChange,
    onBlur,
    helperText,
}: FormInputProps) => {
    return (
        <>
            <S_Input
                type={type}
                placeholder={placeholder}
                title={title}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            />
            {helperText && <S_ErrorMessage>{helperText}</S_ErrorMessage>}
        </>
    );
};

export default FormInput;
