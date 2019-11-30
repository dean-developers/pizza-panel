export default {
    locales: {
        en: 'Англійска',
        ru: 'Російська',
        uk: 'Українська'
    },
    autocomplete: {
        noData: 'Дані відсутні'
    },
    validate: {
        Auth: {
            login: {
                required: 'Введіть логін'
            },
            password: {
                required: 'Введіть пароль'
            }
        },
        Orders: {
            createOrder: {
                name: {
                    required: 'Введіть ім\'я клієнта'
                },
                surname: {
                    required: 'Введіть прізвище клієнта'
                },
                phone: {
                    required: 'Введіть номер телефону'
                },
                cityName: {
                    required: 'Оберіть місто для доставки'
                }
            }
        }
    },
    pages: {
        Auth: {
            form: {
                title: 'Вхід в систему',
                login: 'Логін',
                password: 'Пароль',
                signIn: 'Увійти',
            },
        },
        Orders: {
            createOrder: {
                title: 'Створення замовлення',
                name: 'Ім\'я клієнта',
                surname: 'Прізвище клієнта',
                phone: 'Номер телефону',
                cityName: 'Місто замовлення',
                street: 'Вулиця',
                houseNumber: 'Номер будинку'
            },
            order: {
                orderId: 'Номер замовлення',
                status: 'Статус',
                name: 'Ім\'я клієнта',
                phone: 'Номер телефону клієнта',
                createdAt: 'Створено о',
                states: {
                    processing: 'В процесі'
                }
            },
            noOrders: "Список замовлень порожній"
        },
        Users: {
            table: {
                login: 'Логін',
                type: 'Тип',
                status: 'Статус',
                createdAt: 'В системі з',
                actions: 'Дії'
            }
        }
    },
    menu: {
        orders: 'Замовлення',
        users: 'Користувачі',
        settings: 'Налаштування'
    },
    messages: {
        error: {
            incorrectLoginOrPassword: 'Невірний логін або пароль',
        },
        success: {
            login: 'Успішний вхід',
            online: 'Статус: онлайн',
            created: 'Замовлення успішно створено'
        }
    }
};
