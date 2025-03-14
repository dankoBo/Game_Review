import { auth } from '@/firebase/firebaseAuth';
import { useFormik } from 'formik';
import { signInWithEmailAndPassword } from 'firebase/auth';
import FormInput from '@/UI/form-input/FormInput';
import Button from '@/UI/buttons/primary-button/Button';
import { useLogin } from '@/store/login.store';
import { useAdminPanel } from '@/store/admin-panel.store';
import { useToaster } from '@/store/toaster.store';
import { loginSchema } from '@/validation/loginValidation';
import {
    S_Container,
    S_Form,
    S_BtnContainer,
} from '@/components/login-form/LoginForm.styled';

const LoginForm = () => {
    const closeLogin = useLogin((state) => state.closeLogin);
    const openAdminPanel = useAdminPanel((state) => state.openAdminPanel);
    const setToasterType = useToaster((state) => state.setToasterType);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: loginSchema,
        onSubmit: async (values) => {
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
            }
        },
    });
    
    const handleCloseForm = (event: React.MouseEvent) => {
        event.preventDefault();
        closeLogin();
    };

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
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email ? formik.errors.email : undefined}
                    />
                </div>
                <div>
                    <FormInput
                        type="password"
                        name="password"
                        placeholder="Пароль"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        onBlur={formik.handleBlur}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password ? formik.errors.password : undefined}
                    />
                </div>
                <S_BtnContainer>
                    <Button 
                        name="Увійти" 
                        type="submit" 
                        btnColor="#1e90ff" 
                    />
                    <Button
                        name="Скасувати"
                        type="button"
                        btnColor="#ff4500"
                        onClick={handleCloseForm}
                    />
                </S_BtnContainer>
            </S_Form>
        </S_Container>
    );
};

export default LoginForm;

// const [adminEmailInput, setAdminEmailInput] = useState('');
    // const [adminPasswordInput, setAdminPasswordInput] = useState('');

    // const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setAdminEmailInput(event.target.value);
    // };

    // const handlePasswordChange = (
    //     event: React.ChangeEvent<HTMLInputElement>,
    // ) => {
    //     setAdminPasswordInput(event.target.value);
    // };

    // const handleFormSubmit = async (event: React.FormEvent) => {
    //     event.preventDefault();
    //     try {
    //         const userCredential = await signInWithEmailAndPassword(
    //             auth,
    //             adminEmailInput,
    //             adminPasswordInput,
    //         );
    //         if (userCredential.user) {
    //             openAdminPanel();
    //             closeLogin();
    //             setToasterType('loginSuccess');
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };