export default {
    locales: {
        en: 'Англійска',
        pl: 'Польська',
        uk: 'Українська'
    },
    roles: {
        operator: "Оператор"
    },
    modals: {
        delete: {
            text: 'Ви дійсно хочете видалити запис?'
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
                required: 'Введіть назву донута'
            },
            ingredients: {
                required: 'Оберіть інгрідієнти'
            },
            price: {
                required: 'Вкажіть ціну',
                numeric: 'Некорректне значення'
            },
            weight: {
                required: 'Вкажіть вагу',
                numeric: 'Некорректне значення'
            },
            size: {
                required: 'Вкажіть діаметр',
                numeric: 'Некорректне значення'
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
                choosePizza: 'Оберіть донут',
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
                },
                pizza: 'Донут',
                price: 'Вартість',
                additional: 'Додатково'
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
        },
        404: {
            title: 'Щось пішло не так :(((',
            text: 'Ми нічого не знаємо про цю сторінку, так що можете повернутись назад, якщо хочете',
            back: 'Повернутись назад'
        }
    },
    navigation: {
        orders: 'Замовлення',
        menu: 'Меню',
        users: 'Користувачі',
        settings: 'Налаштування',
        edit: 'Редагування донутів',
        create: 'Новий донут',
        logout: 'Вийти',
        404: 'Сторінку не знайдено'
    },
    messages: {
        error: {
            incorrectLoginOrPassword: 'Невірний логін або пароль',
            pizzaDeleted: 'Піццу видалено з меню',
            orderDeleted: 'Замовлення було видалено з історії',
            noSuchUser: 'Не авторизовано',
        },
        success: {
            login: 'Успішний вхід',
            online: 'Статус: онлайн',
            created: 'Замовлення успішно створено',
            newPizza: 'Донут успішно додано',
            pizzaUpdated: 'Донут успішно оновлено'
        }
    }
};
