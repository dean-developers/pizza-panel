export default {
    locales: {
        en: 'Англійска',
        ru: 'Російська',
        uk: 'Українська'
    },
    roles: {
        operator: "Оператор"
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
        delete: 'Видалити',
        edit: 'Редагувати',
        add: 'Додати замовлення',
        calculate: 'Розрахувати'
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
        },
        Menu: {
            name: {
                required: 'Введіть назву піцци'
            },
            ingredients: {
                required: 'Оберіть інгрідієнти'
            },
            price: {
                required: 'Вкажіть ціну'
            },
            weight: {
                required: 'Вкажіть вагу'
            },
            size: {
                required: 'Вкажіть діаметр'
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
                houseNumber: 'Номер будинку',
                clientDetails: 'Інформація про клієнта',
                orderDetails: 'Деталі замовлення',
                choosePizza: 'Оберіть піццу',
                additionalIngredients: 'Додаткові інгрідієнти',
                totalPrice: 'Загальна ціна'
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
        Menu: {
            ingredients: 'Інгрідієнти',
            parameters: 'Параметри',
            weight: 'Вага (в грамах)',
            size: 'Діаметр (в сантиметрах)',
            price: 'Ціна',
            name: 'Назва'
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
        create: 'Нова піцца',
        logout: "Вийти"
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
