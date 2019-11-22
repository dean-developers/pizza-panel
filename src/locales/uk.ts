export default {
    locales: {
        en: 'Англійска',
        ru: 'Російська',
        uk: 'Українська'
    },
    validate: {
        Login: {
            login: {
                required: 'Введіть логін'
            },
            password: {
                required: 'Введіть пароль'
            }

        },
    },
    pages: {
      Login: {
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
