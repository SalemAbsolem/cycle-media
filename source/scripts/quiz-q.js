const devQuestions = [
  {
    'title': 'Что необходимо разработать?',
    'inValue': 'site',
    'outValue': 'development',
  },
  {
    'input': 'radio',
    'required': true,
    'brunch': 'site',
    'value': 'Разработка cайта',
    'question': {
      'primary-text': 'Разработка сайта',
    },
    'image': false
  },
  {
    'input': 'radio',
    'required': true,
    'brunch': 'style',
    'value': 'Фирменный стиль',
    'question': {
      'primary-text': 'Фирменный стиль',
      'secondary-text': '+&nbsp;оформление носителей'
    },
    'image': false
  },
  {
    'input': 'radio',
    'required': true,
    'brunch': 'brandbook',
    'value': 'Разработка брендбука',
    'question': {
      'primary-text': 'Брендбук',
      'secondary-text': 'Фирменный стиль +&nbsp;бренд-стратегия'
    },
    'image': false
  },
  {
    'input': 'radio',
    'required': true,
    'brunch': 'all-of-them',
    'value': 'Комплексная работа по разработке',
    'question': {
      'primary-text': 'Комплексная работа'
    },
    'image': false
  }
];

const devSiteQuestions = [
  [
    {
      'title': 'У тебя уже есть сайт?',
      'inValue': 'site-development',
      'outValue': 'has-site',
    },
    {
      'input': 'radio',
      'required': true,
      'brunch': 'redesign',
      'value': 'Есть. Нужен редизайн',
      'question': {
        'primary-text': 'сайт есть, необходим редизайн',
      },
      'image': false
    },
    {
      'input': 'radio',
      'required': true,
      'brunch': 'zero',
      'value': 'Нет. Разработка с нуля',
      'question': {
        'primary-text': 'сайта нет, нужна разработка с нуля',
      },
      'image': false
    },
    {
      'input': 'radio',
      'required': true,
      'brunch': 'transfer',
      'value': 'Есть. Нужен перенос',
      'question': {
        'primary-text': 'сайт есть, планирую перенести на другую платформу',
      },
      'image': false
    },
    {
      'input': 'text',
      'required': false,
      'brunch': 'unicorn',
      'value': 'Особенный',
      'question': {
        'primary-text': 'уНИКАЛЬНЫЙ СЛУЧАЙ? МОЖНО ОПИСАТЬ ТУТ...',
      },
      'image': false
    }
  ],
  [
    {
      'title': 'Какой тип сайта тебе нужен?',
      'inValue': 'site-development',
      'outValue': 'type-of-site',
    },
    {
      'input': 'radio',
      'required': true,
      'brunch': 'lending',
      'value': 'Landing page',
      'question': {
        'primary-text': 'Landing page',
        'secondary-text': '«посадочная страница»'
      },
      'image': false
    },
    {
      'input': 'radio',
      'required': true,
      'brunch': 'promo',
      'value': 'Промо-сайт',
      'question': {
        'primary-text': 'Промо-сайт',
        'secondary-text': 'для рекламы услуги или товара'
      },
      'image': false
    },
    {
      'input': 'radio',
      'required': true,
      'brunch': 'shop',
      'value': 'Интернет-магазин',
      'question': {
        'primary-text': 'Интернет-магазин',
        'secondary-text': 'чтобы совершать покупки онлайн'
      },
      'image': false
    },
    {
      'input': 'radio',
      'required': true,
      'brunch': 'company',
      'value': 'Интернет-магазин',
      'question': {
        'primary-text': 'Корпоративный сайт',
        'secondary-text': 'для сотрудников и клиентов компании'
      },
      'image': false
    },
    {
      'input': 'text',
      'required': false,
      'brunch': 'unicorn',
      'value': 'Особенный',
      'question': {
        'primary-text': 'точно знаешь, какой сайт нужен? расскажи тут...',
      },
      'image': false
    }
  ],
  [
    {
      'title': 'На какой площадке планируется разработка?',
      'inValue': 'site-development',
      'outValue': 'cms',
    },
    {
      'input': 'radio',
      'required': true,
      'brunch': 'constructor',
      'value': 'Конструктор',
      'question': {
        'primary-text': 'Конструктор',
        'secondary-text': 'Tilda'
      },
      'image': false
    },
    {
      'input': 'radio',
      'required': true,
      'brunch': 'CMS',
      'value': 'CMS',
      'question': {
        'primary-text': 'CMS система',
        'secondary-text': 'WordPress, Joomla, 1С-Битрикс'
      },
      'image': false
    },
    {
      'input': 'text',
      'required': false,
      'brunch': 'unicorn',
      'value': 'Особенный',
      'question': {
        'primary-text': 'что-то менее популярное? напиши название здесь',
      },
      'image': false
    }
  ],
  [
    {
      'title': 'Каким функционалом должен обладать сайт?',
      'inValue': 'site-development',
      'outValue': 'function',
    },
    {
      'input': 'radio',
      'required': true,
      'brunch': 'standart',
      'value': 'Стандартный',
      'question': {
        'primary-text': 'Стандартный',
        'secondary-text': 'формы, меню, виджеты'
      },
      'image': false
    },
    {
      'input': 'radio',
      'required': true,
      'brunch': 'Shop',
      'value': 'Интернет-магазин',
      'question': {
        'primary-text': 'Интернет-магазин',
        'secondary-text': 'каталог, платёжная система, фильтр'
      },
      'image': false
    },
    {
      'input': 'radio',
      'required': true,
      'brunch': 'all-inclusive',
      'value': 'Все включено',
      'question': {
        'primary-text': 'Все включено',
        'secondary-text': 'анимация, интеграции / магазин'
      },
      'image': false
    },
    {
      'input': 'text',
      'required': false,
      'brunch': 'unicorn',
      'value': 'Особенный',
      'question': {
        'primary-text': 'что-нибудь еще? Ты знаешь, что делать...',
      },
      'image': false
    }
  ],
  [
    {
      'title': 'Сколько страниц планируется?',
      'inValue': 'site-development',
      'outValue': 'pages-count',
    },
    {
      'input': 'radio',
      'required': true,
      'brunch': '1-2',
      'value': '1-2',
      'question': {
        'primary-text': '1 - 2 страницы',
      },
      'image': false
    },
    {
      'input': 'radio',
      'required': true,
      'brunch': '2-5',
      'value': '2-5',
      'question': {
        'primary-text': '2 - 5 страниц',
      },
      'image': false
    },
    {
      'input': 'radio',
      'required': true,
      'brunch': '5-15',
      'value': '5-15',
      'question': {
        'primary-text': '5 - 15 страниц',
      },
      'image': false
    },
    {
      'input': 'radio',
      'required': true,
      'brunch': 'more-15',
      'value': 'Больше 15',
      'question': {
        'primary-text': '> 15 страниц',
      },
      'image': false
    }
  ],
  [
    {
      'title': 'Какой дизайн хочется?',
      'inValue': 'site-development',
      'outValue': 'design',
    },
    {
      'input': 'radio',
      'required': true,
      'brunch': 'company',
      'value': 'По брендбуку',
      'question': {
        'primary-text': 'По тз компании',
        'secondary-text': 'в соответсвии с брендбуком'
      },
      'image': true
    },
    {
      'input': 'radio',
      'required': true,
      'brunch': 'templates',
      'value': 'По шаблону',
      'question': {
        'primary-text': 'Шаблонный дизайн',
        'secondary-text': 'стандартные блоки'
      },
      'image': true
    },
    {
      'input': 'radio',
      'required': true,
      'brunch': 'simple',
      'value': 'Сдержанный',
      'question': {
        'primary-text': 'Сдержанный дизайн',
        'secondary-text': 'строгость, простота, удобство'
      },
      'image': true
    },
    {
      'input': 'radio',
      'required': true,
      'brunch': 'progressive',
      'value': 'Прогрессивный',
      'question': {
        'primary-text': 'прогрессивный дизайн',
        'secondary-text': 'смелый, радикальный, арт'
      },
      'image': true
    },
    {
      'input': 'radio',
      'required': true,
      'brunch': 'extra',
      'value': 'Экстра',
      'question': {
        'primary-text': 'Экстра дизайн',
        'secondary-text': 'под спец проекты'
      },
      'image': true
    }
  ],
  [
    {
      'title': 'кратко опиши нишу и расскажи о компании',
      'inValue': 'site-development',
      'outValue': 'target',
    },
    {
      'input': 'text',
      'required': false,
      'brunch': 'target',
      'value': 'Ниша компании',
      'question': {
        'primary-text': 'Глэмпинг в выборге, посуточная аренда...',
      },
      'image': false
    }
  ],
  [
    {
      'title': 'Может у тебя уже есть готовое тз, оставь его тут, мы обязательно посмотрим',
      'inValue': 'site-development',
      'outValue': 'tz',
    },
    {
      'input': 'text',
      'required': false,
      'brunch': 'tz',
      'value': 'ТЗ',
      'question': {
        'primary-text': 'магазин одежды на 50 позиций...',
      },
      'image': false
    }
  ],
  [
    {
      'title': 'Почти все!<br><br>Есть ограничения по бюджету?',
      'inValue': 'site-development',
      'outValue': 'money-count',
    },
    {
      'input': 'radio',
      'required': true,
      'brunch': '100-200',
      'value': '100-200',
      'question': {
        'primary-text': 'От 100 000 до 250 000',
      },
      'image': false
    },
    {
      'input': 'radio',
      'required': true,
      'brunch': '250-500',
      'value': '250-500',
      'question': {
        'primary-text': 'От 250 000 - 500 000',
      },
      'image': false
    },
    {
      'input': 'radio',
      'required': true,
      'brunch': '500-1000',
      'value': '500-1000',
      'question': {
        'primary-text': 'От 500 000 - 1 000 000',
      },
      'image': false
    },
    {
      'input': 'radio',
      'required': true,
      'brunch': 'more-1000',
      'value': 'Больше 1000',
      'question': {
        'primary-text': 'Более - 1 000 000',
      },
      'image': false
    }
  ],
  [
    {
      'title': 'Ура! мы сделали это!<br><br>оставь контакт, мы отправим коммерческое предложение',
      'inValue': 'site-development',
      'outValue': 'final-form',
    }
  ]
];

const merketingQuestions = [
  {
    'title': 'Что тебя интересует?',
    'inValue': 'marketing',
    'outValue': 'strategy',
  },
  {
    'input': 'radio',
    'required': true,
    'brunch': 'marketing-strategy',
    'value': 'Маркетинговая стратегия',
    'question': {
      'primary-text': 'Маркетинговая стратегия',
      'secondary-text': 'поможет увеличить LTV клиента, поток продаж или вывести на рынок новый продукт'
    },
    'image': false
  },
  {
    'input': 'radio',
    'required': true,
    'brunch': 'content-strategy',
    'value': 'Контент-стратегия',
    'question': {
      'primary-text': 'Контент-стратегия',
      'secondary-text': 'подойдет тем, кто не знает как вести социальные сети: +&nbsp;подписчики +&nbsp;узнаваемость +&nbsp;вовлеченность'
    },
    'image': false
  },
  {
    'input': 'radio',
    'required': true,
    'brunch': 'promotion',
    'value': 'Продвижение',
    'question': {
      'primary-text': 'Продвижение',
      'secondary-text': 'Поможем с настройкой рекламы'
    },
    'image': false
  },
  {
    'input': 'radio',
    'required': true,
    'brunch': 'brandbook',
    'value': 'Брендбук',
    'question': {
      'primary-text': 'Брендбук',
      'secondary-text': 'Фирменный стиль +&nbsp;бренд-стратегия'
    },
    'image': false
  },
  {
    'input': 'text',
    'required': false,
    'brunch': 'unicorn',
    'value': 'Особенный',
    'question': {
      'primary-text': 'уНИКАЛЬНЫЙ СЛУЧАЙ? МОЖНО ОПИСАТЬ ТУТ...',
    },
    'image': false
  }
];

const allOfThemQuestions = [
  {
    'title': 'Давай пообщаемся, мы обязательно найдем решение',
    'inValue': 'all-of-them',
    'outValue': 'final-form',
  }
];

export {devQuestions, devSiteQuestions, merketingQuestions, allOfThemQuestions};
