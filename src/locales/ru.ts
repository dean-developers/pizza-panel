export default {
    locales: {
        en: 'Английский',
        ru: 'Русский',
        uk: 'Украинский'
    },
    validate: {
        Auth: {
            login: {
                required: 'Введите логин'
            },
            password: {
                required: 'Введите пароль'
            }

        },
    },
    pages: {
        Auth: {
            form: {
                title: 'Вход в систему',
                login: 'Логин',
                password: 'Пароль',
                signIn: 'Войти',
            },
        }
    },

    menu: {
        orders: 'Заказы',
        users: 'Пользователи',
        settings: 'Настройки'
    },
    messages: {
        error: {
            incorrectLoginOrPassword: 'Неверный email или пароль',
        },
        success: {
            login: 'Успешный вход'
        }
    }
};
