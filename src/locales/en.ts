export default {
    locales: {
        en: 'English',
        ru: 'Russian',
        uk: 'Ukrainian'
    },
    validate: {
        Auth: {
            login: {
                required: 'Fill an login'
            },
            password: {
                required: 'Fill an password'
            }

        },
    },
    pages: {
        Auth: {
            form: {
                title: 'System login',
                login: 'Login',
                password: 'Password',
                signIn: 'Login',
            },
        }
    },

    menu: {
        orders: 'Orders',
        users: 'Users',
        settings: 'Settings'
    },

    messages: {
        error: {
            incorrectLoginOrPassword: 'Email or password incorrect',
        },
        success: {
            login: 'Success login'
        }
    }
};
