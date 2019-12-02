export default {
    locales: {
        en: 'Английский',
        ru: 'Русский',
        uk: 'Украинский'
    },
    modals: {
        delete: {
            text: 'Вы действительно хотите удалить запись из меню?'
        }
    },
    autocomplete: {
        noData: 'Данные отсутсвуют'
    },
    buttons: {
        create: 'Создать',
        cancel: 'Отменить',
        update: 'Обновить',
        delete: 'Удалить'
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
        Orders: {
            createOrder: {
                name: {
                    required: 'Ведите имя клиента'
                },
                surname: {
                    required: 'Введите фамилию клиента'
                },
                phone: {
                    required: 'Введите номер телефона'
                },
                cityName: {
                    required: 'Выберите город доставки'
                }
            }
        }
    },
    pages: {
        Auth: {
            form: {
                title: 'Вход в систему',
                login: 'Логин',
                password: 'Пароль',
                signIn: 'Войти',
            },
        },
        Orders: {
            createOrder: {
                title: 'Новый заказ',
                name: 'Имя клиента',
                surname: 'Фамилия клиента',
                phone: 'Номер телефона',
                cityName: 'Город доставки',
                street: 'Улица',
                houseNumber: 'Номер дома'
            },
            order: {
                orderId: 'Номер заказа',
                status: 'Статус',
                name: 'Имя клиента',
                phone: 'Номер телефона клиента',
                createdAt: 'Создано в',
                states: {
                    processing: 'В процессе'
                }
            },
            noOrders: "Список заказов пуст"
        },
        Users: {
            table: {
                login: 'Логин',
                type: 'Тип',
                status: 'Статус',
                createdAt: 'В системе с',
                actions: 'Действия'
            }
        }
    },

    navigation: {
        orders: 'Заказы',
        menu: 'Меню',
        users: 'Пользователи',
        settings: 'Настройки',
        edit: 'Редактирование пиццы',
        create: 'Новая пицца'
    },
    messages: {
        error: {
            incorrectLoginOrPassword: 'Неверный email или пароль',
            pizzaDeleted: 'Пицца удалена из меню'
        },
        success: {
            login: 'Успешный вход',
            online: 'Статус: онлайн',
            created: 'Заказ успешно создан',
            newPizza: 'Пицца успешно добавлена',
            pizzaUpdated: 'Пицца успешно обновлена'
        }
    }
};
