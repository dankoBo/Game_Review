import { useState } from 'react';
import { useFormik } from 'formik';
import { auth } from '@/firebase/firebaseAuth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { IoMdEye, IoIosEyeOff } from "react-icons/io";
import { useLogin } from '@/store/login.store';
import { useToaster } from '@/store/toaster.store';
import { useAdminPanel } from '@/store/admin-panel.store';
import { loginSchema } from '@/validation/loginValidation';
import FormInput from '@/UI/form-input/FormInput';
import PrimaryButton from '@/UI/buttons/primary-button/PrimaryButton';

import {
    S_Container,
    S_Form,
    S_PasswordContainer,
    S_PasswordIconContainer,
    S_BtnContainer,
} from '@/components/login-form/LoginForm.styled';
import IconButton from '@/UI/buttons/icon-button/IconButton';

const LoginForm = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const closeLogin = useLogin((state) => state.closeLogin);
    const openAdminPanel = useAdminPanel((state) => state.openAdminPanel);
    const setToasterType = useToaster((state) => state.setToasterType);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: loginSchema,
        onSubmit: async (values, { setFieldError }) => {
            try {
                const userCredential = await signInWithEmailAndPassword(
                    auth,
                    values.email,
                    values.password,
                );
                if (userCredential.user) {
                    openAdminPanel();
                    closeLogin();
                    setToasterType('loginSuccess');
                }
            } catch (error) {
                console.error('Помилка при вході:', error);
                setFieldError('password', 'Невірна пошта або пароль');
            }
        },
    });

    const handleCloseForm = (event: React.MouseEvent) => {
        event.preventDefault();
        closeLogin();
    };

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(currentValue => !currentValue)
    }

    return (
        <S_Container>
            <S_Form onSubmit={formik.handleSubmit} noValidate>
                <div>
                    <FormInput
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        onBlur={formik.handleBlur}
                        error={
                            formik.touched.email && Boolean(formik.errors.email)
                        }
                        helperText={
                            formik.touched.email
                                ? formik.errors.email
                                : undefined
                        }
                    />
                </div>
                <S_PasswordContainer>
                    <FormInput
                        type={isPasswordVisible ? 'text' : 'password'}
                        name="password"
                        placeholder="Пароль"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        onBlur={formik.handleBlur}
                        error={
                            formik.touched.password &&
                            Boolean(formik.errors.password)
                        }
                        helperText={
                            formik.touched.password
                                ? formik.errors.password
                                : undefined
                        }
                    />
                    <S_PasswordIconContainer>
                        <IconButton
                            onClick={togglePasswordVisibility}
                            icon={ isPasswordVisible ? IoIosEyeOff : IoMdEye }
                        />
                    </S_PasswordIconContainer>
                </S_PasswordContainer>
                <S_BtnContainer>
                    <PrimaryButton
                        name="Увійти"
                        type="submit"
                        btnColor="#00674F"
                    />
                    <PrimaryButton
                        name="Скасувати"
                        type="button"
                        btnColor="#e94560"
                        onClick={handleCloseForm}
                    />
                </S_BtnContainer>
            </S_Form>
        </S_Container>
    );
};

export default LoginForm;
