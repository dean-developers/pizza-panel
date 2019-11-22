export default {
    locales: {
        en: 'Англійска',
        ru: 'Російська',
        uk: 'Українська'
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
    },
    pages: {
      Auth: {
          form: {
              title: 'Вхід в систему',
              login: 'Логін',
              password: 'Пароль',
              signIn: 'Увійти',
          },
      }
    },
    menu: {
        receiveOrders: 'Прийом замовлень',
        settings: 'Налаштування'
    },
    messages: {
        error: {
            incorrectEmailOrPassword: 'Невірний логін або пароль',
        },
        success: {
            login: 'Успішний вхід'
        }
    }
};
