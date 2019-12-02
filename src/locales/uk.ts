export default {
    locales: {
        en: 'Англійска',
        ru: 'Російська',
        uk: 'Українська'
    },
    modals: {
        delete: {
            text: 'Ви дійсно хочете видалити запис з меню?'
        }
    },
    autocomplete: {
        noData: 'Дані відсутні'
    },
    buttons: {
        create: 'Створити',
        cancel: 'Відмінити',
        update: 'Оновити',
        delete: 'Видалити'
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
                title: 'Нове замовлення',
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
    navigation: {
        orders: 'Замовлення',
        menu: 'Меню',
        users: 'Користувачі',
        settings: 'Налаштування',
        edit: 'Редагування піцци',
        create: 'Нова піцца'
    },
    messages: {
        error: {
            incorrectLoginOrPassword: 'Невірний логін або пароль',
            pizzaDeleted: 'Піццу видалено з меню'
        },
        success: {
            login: 'Успішний вхід',
            online: 'Статус: онлайн',
            created: 'Замовлення успішно створено',
            newPizza: 'Піццу успішно додано',
            pizzaUpdated: 'Піццу успішно оновлено'
        }
    }
};
