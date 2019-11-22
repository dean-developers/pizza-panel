export default {
    locales: {
        en: 'Английский',
        ru: 'Русский',
        uk: 'Украинский'
    },
    validate: {
        Login: {
            login: {
                required: 'Введите логин'
            },
            password: {
                required: 'Введите пароль'
            }

        },
    },
    pages: {
        Login: {
            form: {
                title: 'Вход в систему',
                login: 'Логин',
                password: 'Пароль',
                signIn: 'Войти',
            },
        }
    },

    menu: {
        receiveOrders: 'Приём заказов',
        settings: 'Настройки'
    },
    messages: {
        error: {
            incorrectEmailOrPassword: 'Неверный email или пароль',
        },
        success: {
            login: 'Успешный вход'
        }
    }
};
