import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
    email: Yup.string()
        .email("Некоректна електронна пошта")
        .required("Це поле є обов'язковим"),
    password: Yup.string()
        .matches(/^[^а-яА-ЯёЁ]+$/, "Пароль не може містити кирилицю")
        .required("Це поле є обов'язковим"),
});
