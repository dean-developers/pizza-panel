export default {
    locales: {
        en: 'English',
        ru: 'Russian',
        uk: 'Ukrainian'
    },
    roles: {
        admin: 'Admin',
        operator: 'Operator',
        driver: 'Courier'
    },
    modals: {
        delete: {
            text: 'Are you really want to delete item ?'
        }
    },
    autocomplete: {
        noData: 'No data'
    },
    buttons: {
        create: 'Create',
        cancel: 'Cancel',
        update: 'Update',
        delete: 'Delete',
        edit: 'Edit',
        add: 'Add order',
        calculate: 'Calculate'
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
        },
        Menu: {
            name: {
                required: 'Fill a pizza name',
            },
            ingredients: {
                required: 'Choose an ingredients'
            },
            price: {
                required: 'Fill a price',
                numeric: 'Incorrect value'
            },
            weight: {
                required: 'Fill a weight',
                numeric: 'Incorrect value'
            },
            size: {
                required: 'Fill a diameter',
                numeric: 'Incorrect value'
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
                title: 'New order',
                name: 'Client name',
                surname: 'Client surname',
                phone: 'Phone number',
                cityName: 'Delivery city',
                street: 'Street',
                houseNumber: 'House number',
                clientDetails: 'Client details',
                orderDetails: 'Order details',
                choosePizza: 'Choose pizza',
                additionalIngredients: 'Additional ingredients',
                totalPrice: 'Total price'
            },
            order: {
                orderId: 'Order id',
                status: 'Status',
                name: 'Client name',
                phone: 'Client phone number',
                createdAt: 'Created at',
                states: {
                    processing: 'In process'
                },
                pizza: 'Pizza',
                price: 'Price',
                additional: 'Additional'
            },
            noOrders: "Orders list is empty"
        },
        Menu: {
            ingredients: 'Ingredients',
            parameters: 'Parameters',
            weight: 'Weight (in grams)',
            size: 'Diameter (in centimeters)',
            price: 'Price',
            name: 'Name'
        },
        Users: {
            table: {
                login: 'Login',
                type: 'Type',
                status: 'Status',
                createdAt: 'Created',
                actions: 'Actions',
                online: 'Online',
                offline: 'Offline'
            }
        },
        404: {
            title: 'Wooooops :(((',
            text: 'We dont know about this page, so you can go back if u want',
            back: 'Go back'
        }
    },

    navigation: {
        orders: 'Orders',
        menu: 'Menu',
        users: 'Users',
        settings: 'Settings',
        edit: 'Edit pizza',
        create: 'New pizza',
        logout: 'Log out',
        404: 'Page not found'
    },

    messages: {
        error: {
            noSuchUser: 'Not authorized',
            incorrectLoginOrPassword: 'Email or password incorrect',
            pizzaDeleted: 'Pizza was deleted from menu',
            orderDeleted: 'Order was deleted from history'
        },
        success: {
            login: 'Success login',
            online: 'Status: online',
            created: 'Order successfully created',
            newPizza: 'Pizza was successfully added',
            pizzaUpdated: 'Pizza was successfully updated'
        }
    }
};
