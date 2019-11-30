export default {
    locales: {
        en: 'English',
        ru: 'Russian',
        uk: 'Ukrainian'
    },
    autocomplete: {
      noData: 'No data'
    },
    validate: {
        Auth: {
            login: {
                required: 'Fill a login'
            },
            password: {
                required: 'Fill a password'
            }
        },
        Orders: {
            createOrder: {
                name: {
                    required: 'Fill a client name'
                },
                surname: {
                    required: 'Fill a client surname'
                },
                phone: {
                    required: 'Fill a client phone number'
                },
                cityName: {
                    required: 'Choose city for delivery'
                }
            }
        }
    },
    pages: {
        Auth: {
            form: {
                title: 'System login',
                login: 'Login',
                password: 'Password',
                signIn: 'Login',
            },
        },
        Orders: {
            createOrder: {
                title: 'Create order',
                name: 'Client name',
                surname: 'Client surname',
                phone: 'Phone number',
                cityName: 'Delivery city',
                street: 'Street',
                houseNumber: 'House number'
            },
            order: {
                orderId: 'Order id',
                status: 'Status',
                name: 'Client name',
                phone: 'Client phone number',
                createdAt: 'Created at',
                states: {
                    processing: 'In process'
                }
            },
            noOrders: "Orders list is empty"
        },
        Users: {
            table: {
                login: 'Login',
                type: 'Type',
                status: 'Status',
                createdAt: 'Created',
                actions: 'Actions'
            }
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
            login: 'Success login',
            online: 'Status: online',
            created: 'Order successfully created'
        }
    }
};
