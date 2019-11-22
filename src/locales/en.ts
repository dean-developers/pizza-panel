export default {
    locales: {
        en: 'English',
        ru: 'Russian',
        uk: 'Ukrainian'
    },
    validate: {
        Login: {
            login: {
                required: 'Fill an login'
            },
            password: {
                required: 'Fill and password'
            }

        },
    },
    pages: {
        Login: {
            form: {
                title: 'System login',
                login: 'Login',
                password: 'Password',
                signIn: 'Login',
            },
        }
    },

    menu: {
        receiveOrders: 'Receive orders',
        settings: 'Settings'
    },
    messages: {
        error: {
            incorrectEmailOrPassword: 'Email or password incorrect',
        },
        success: {
            login: 'Success login'
        }
    }
};
