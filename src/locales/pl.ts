export default {
    locales: {
        en: 'Angielski',
        pl: 'Polski',
        uk: 'Ukraiński'
    },
    roles: {
        operator: "Operator"
    },
    modals: {
        delete: {
            text: 'Napewno chcesz usunąć dopis?'
        }
    },
    autocomplete: {
        noData: 'Brak danych'
    },
    buttons: {
        create: 'Stworzyć',
        cancel: 'Anulować',
        update: 'Aktualizować',
        delete: 'Skasować',
        edit: 'Redagować',
        add: 'Dodać zamówienie',
        calculate: 'Obliczyć'
    },
    validate: {
        Auth: {
            login: {
                required: 'Wporadź login'
            },
            password: {
                required: 'Wprowadź hasło'
            }
        },
        Orders: {
            createOrder: {
                name: {
                    required: 'Wprowadź imię klienta'
                },
                surname: {
                    required: 'Wprowadź nazwisko klienta'
                },
                phone: {
                    required: 'Wprowadź numer telefonu'
                },
                cityName: {
                    required: 'Wybierz miasto dostawy'
                }
            }
        },
        Menu: {
            name: {
                required: 'Wprowadź nazwę',
            },
            ingredients: {
                required: 'Выберите ингредиенты',
            },
            price: {
                required: 'Ustaw cenę',
                numeric: 'Nieprawidłowa wartość'
            },
            weight: {
                required: 'Укажите вес',
                numeric: 'Некорректное значение'
            },
            size: {
                required: 'Ustaw diametr',
                numeric: 'Nieprawidłowa wartość'
            }
        }
    },
    pages: {
        Auth: {
            form: {
                title: 'Wejdź do systemu',
                login: 'Login',
                password: 'Hasło',
                signIn: 'Wejdź',
            },
        },
        Orders: {
            createOrder: {
                title: 'Nowe zamówienie',
                name: 'Imię',
                surname: 'Nazwisko',
                phone: 'Numer telefonu',
                cityName: 'Miasto dostawy',
                street: 'Ulica',
                houseNumber: 'Numer domu',
                clientDetails: 'Dodatkowa informacja',
                orderDetails: 'Szczegóły dostawy',
                choosePizza: 'Wybierz donut',
                additionalIngredients: 'Дополнительные ингредиенты',
                totalPrice: 'Wartość ogólna'
            },
            order: {
                orderId: 'Numer zamówienia',
                status: 'Status',
                name: 'Imię',
                phone: 'Numer telefonu',
                createdAt: 'Stworzono o',
                states: {
                    processing: 'W trakcie'
                },
                pizza: 'Donut',
                price: 'Cena',
                additional: 'Dodatkowo'
            },
            noOrders: "Brak zamówień"
        },
        Menu: {
            ingredients: 'Składniki',
            parameters: 'Parametry',
            weight: 'Waga (w gramach)',
            size: 'Diametr (w cm)',
            price: 'Cena',
            name: 'Nazwa'
        },
        Users: {
            table: {
                login: 'Login',
                type: 'Typ',
                status: 'Status',
                createdAt: 'W systemie od',
                actions: 'Działania'
            }
        },
        404: {
            title: 'Nie powiodło się :(',
            text: 'Nic nie wiemy o tej stronie, możesz wrócić jeżeli chcesz',
            back: 'Wróć'
        }
    },

    navigation: {
        orders: 'Zamówienia',
        menu: 'Menu',
        users: 'Użytkowniki',
        settings: 'Ustawienia',
        edit: 'Edytuj donut',
        create: 'Nowy donut',
        logout: 'Wydź',
        404: 'Nie znaleziono strony'
    },
    messages: {
        error: {
            incorrectLoginOrPassword: 'Nieprowany email lub hasło',
            pizzaDeleted: 'Donut wycofany z menu',
            orderDeleted: 'Zamówienie skasowane',
            noSuchUser: 'Nieautoryzowany',
        },
        success: {
            login: 'Logowanie udane',
            online: 'Status: online',
            created: 'Tworzenie zamówienia się powiodło',
            newPizza: 'Donut dodany',
            pizzaUpdated: 'Donut zaktualizowany'
        }
    }
};
