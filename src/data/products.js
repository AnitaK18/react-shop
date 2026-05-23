import Img1 from '../assets/images/img-11.jpg';
import Img2 from '../assets/images/img-22.jpg';
import Img3 from '../assets/images/img-33.jpg';
import Img4 from '../assets/images/img-44.jpg';
import Img5 from '../assets/images/img-55.jpg';
import Img6 from '../assets/images/img-66.jpg';
import Img7 from '../assets/images/img-77.jpg';
import Img8 from '../assets/images/img-88.jpg';
import Img9 from '../assets/images/img-99.jpg';

export const CATEGORIES = [
  { value: "face", label: "Обличчя" },
  { value: "hair", label: "Волосся" },
  { value: "body", label: "Тіло" },
  { value: "lips", label: "Губи" },
];

// Note: images are reused across products of the same category — swap freely later.
export const PRODUCT_LIST = [
  {
    id: 1,
    category: "face",
    discount: "-10%",
    discountPercent: 10,
    image: Img1,
    title: "Натуральний крем для обличчя",
    price: "$12.99",
    oldPrice: "$15.99",
    description:
      "Зволожуючий крем на основі натуральних компонентів. Підходить для всіх типів шкіри. Забезпечує глибоке зволоження та живлення шкіри протягом всього дня.",
    features: [
      "Натуральні компоненти",
      "Підходить для всіх типів шкіри",
      "Без парабенів",
      "Дерматологічно протестовано",
    ],
  },
  {
    id: 2,
    category: "body",
    discount: "-15%",
    discountPercent: 15,
    image: Img2,
    title: "Очищаючий гель для тіла",
    price: "$12.99",
    oldPrice: "$15.99",
    description:
      "Делікатний очищаючий гель з натуральними екстрактами. Підтримує природний баланс шкіри та залишає приємний аромат.",
    features: [
      "Делікатне очищення",
      "Натуральні екстракти",
      "Підтримує баланс шкіри",
      "Приємний аромат",
    ],
  },
  {
    id: 3,
    category: "hair",
    discount: "-5%",
    discountPercent: 5,
    image: Img3,
    title: "Шампунь для всіх типів волосся",
    price: "$12.99",
    oldPrice: "$15.99",
    description:
      "Зміцнюючий шампунь з вітамінами та мінералами. Робить волосся сильним, блискучим та здоровим.",
    features: [
      "Зміцнює волосся",
      "Вітаміни та мінерали",
      "Додає блиск",
      "Підходить для щоденного використання",
    ],
  },
  {
    id: 4,
    category: "hair",
    discount: "-20%",
    discountPercent: 20,
    image: Img4,
    title: "Маска для волосся",
    price: "$12.99",
    oldPrice: "$15.99",
    description:
      "Відновлююча маска для пошкодженого волосся. Глибоко живить та відновлює структуру волосся.",
    features: [
      "Відновлює структуру",
      "Глибоке живлення",
      "Для пошкодженого волосся",
      "Інтенсивний догляд",
    ],
  },
  {
    id: 5,
    category: "lips",
    discount: "-17%",
    discountPercent: 17,
    image: Img5,
    title: "Бальзам для губ",
    price: "$12.99",
    oldPrice: "$15.99",
    description:
      "Зволожуючий бальзам для губ з натуральними оліями. Захищає від вітру та морозу.",
    features: [
      "Натуральні олії",
      "Захист від вітру",
      "Тривале зволоження",
      "Приємна текстура",
    ],
  },
  {
    id: 6,
    category: "body",
    discount: "-3%",
    discountPercent: 3,
    image: Img6,
    title: "Скраб для тіла",
    price: "$12.99",
    oldPrice: "$15.99",
    description:
      "Делікатний скраб з морською сіллю та натуральними оліями. Робить шкіру гладкою та шовковистою.",
    features: [
      "Морська сіль",
      "Натуральні олії",
      "Делікатне очищення",
      "Гладка шкіра",
    ],
  },
  {
    id: 7,
    category: "face",
    discount: "-18%",
    discountPercent: 18,
    image: Img7,
    title: "Сироватка для обличчя",
    price: "$12.99",
    oldPrice: "$15.99",
    description:
      "Антивікова сироватка з гіалуронової кислотою. Зменшує зморшки та покращує еластичність шкіри.",
    features: [
      "Гіалуронова кислота",
      "Антивіковий ефект",
      "Зменшує зморшки",
      "Покращує еластичність",
    ],
  },
  {
    id: 8,
    category: "body",
    discount: "-10%",
    discountPercent: 10,
    image: Img8,
    title: "Лосьйон для тіла",
    price: "$12.99",
    oldPrice: "$15.99",
    description:
      "Зволожуючий лосьйон для щоденного догляду. Швидко вбирається та залишає шкіру м'якою.",
    features: [
      "Швидко вбирається",
      "Щоденний догляд",
      "М'яка шкіра",
      "Приємний аромат",
    ],
  },
  {
    id: 9,
    category: "face",
    discount: "-5%",
    discountPercent: 5,
    image: Img9,
    title: "Тонік для обличчя",
    price: "$12.99",
    oldPrice: "$15.99",
    description:
      "Освіжаючий тонік для всіх типів шкіри. Підготовує шкіру до нанесення крему.",
    features: [
      "Освіжає шкіру",
      "Для всіх типів шкіри",
      "Підготовка до крему",
      "Без спирту",
    ],
  },
  {
    id: 10,
    category: "face",
    discount: "-8%",
    discountPercent: 8,
    image: Img1,
    title: "Міцелярна вода для зняття макіяжу",
    price: "$9.99",
    oldPrice: "$10.99",
    description:
      "Делікатна міцелярна вода для очищення шкіри обличчя від макіяжу. Не подразнює очі та шкіру.",
    features: [
      "Не подразнює",
      "Підходить для повік",
      "Без спирту",
      "Гіпоалергенна формула",
    ],
  },
  {
    id: 11,
    category: "face",
    discount: "-12%",
    discountPercent: 12,
    image: Img7,
    title: "Денний крем SPF 30",
    price: "$16.99",
    oldPrice: "$19.99",
    description:
      "Легкий денний крем із захистом від сонця SPF 30. Захищає шкіру від UV-променів та зволожує.",
    features: [
      "SPF 30",
      "Легка текстура",
      "Захист від UV",
      "Не залишає білих слідів",
    ],
  },
  {
    id: 12,
    category: "face",
    discount: "-15%",
    discountPercent: 15,
    image: Img9,
    title: "Крем для повік",
    price: "$14.99",
    oldPrice: "$17.99",
    description:
      "Розгладжуючий крем для делікатної шкіри навколо очей. Зменшує мішки та темні кола.",
    features: [
      "Зменшує мішки",
      "Освітлює темні кола",
      "Розгладжує зморшки",
      "Делікатна формула",
    ],
  },
  {
    id: 13,
    category: "hair",
    discount: "-10%",
    discountPercent: 10,
    image: Img3,
    title: "Кондиціонер для зміцнення волосся",
    price: "$11.99",
    oldPrice: "$13.49",
    description:
      "Зміцнюючий кондиціонер з кератином. Робить волосся слухняним та зменшує ламкість.",
    features: [
      "Кератин у складі",
      "Зменшує ламкість",
      "Полегшує розчісування",
      "Підходить для щоденного використання",
    ],
  },
  {
    id: 14,
    category: "hair",
    discount: "-20%",
    discountPercent: 20,
    image: Img4,
    title: "Олія для волосся з аргановою олією",
    price: "$18.99",
    oldPrice: "$23.99",
    description:
      "Поживна олія з аргановим маслом для сухого волосся. Додає блиск та живить кінчики.",
    features: [
      "Аргановa олія",
      "Живить кінчики",
      "Додає блиск",
      "Захищає від термоукладки",
    ],
  },
  {
    id: 15,
    category: "hair",
    discount: "-7%",
    discountPercent: 7,
    image: Img3,
    title: "Сухий шампунь",
    price: "$13.99",
    oldPrice: "$15.49",
    description:
      "Швидкий сухий шампунь для свіжості волосся між миттями. Не залишає білих слідів.",
    features: [
      "Швидке очищення",
      "Без води",
      "Не залишає слідів",
      "Свіжий аромат",
    ],
  },
  {
    id: 16,
    category: "body",
    discount: "-18%",
    discountPercent: 18,
    image: Img2,
    title: "Масло для тіла з кокосом",
    price: "$15.99",
    oldPrice: "$19.49",
    description:
      "Поживне масло для тіла з кокосовим маслом. Глибоко зволожує суху шкіру.",
    features: [
      "Кокосове масло",
      "Глибоке зволоження",
      "Для сухої шкіри",
      "Приємний аромат",
    ],
  },
  {
    id: 17,
    category: "body",
    discount: "-5%",
    discountPercent: 5,
    image: Img6,
    title: "Крем для рук з вітаміном Е",
    price: "$9.99",
    oldPrice: "$10.49",
    description:
      "Зволожуючий крем для рук з вітаміном Е. Захищає шкіру рук від пересушування.",
    features: [
      "Вітамін Е",
      "Швидко вбирається",
      "Захист від пересушування",
      "Не залишає жирної плівки",
    ],
  },
  {
    id: 18,
    category: "body",
    discount: "-10%",
    discountPercent: 10,
    image: Img8,
    title: "Крем для ніг з ментолом",
    price: "$10.99",
    oldPrice: "$12.19",
    description:
      "Освіжаючий крем для ніг з ментолом. Знімає втому та дарує відчуття легкості.",
    features: [
      "Ментол у складі",
      "Знімає втому",
      "Освіжає",
      "Швидко вбирається",
    ],
  },
  {
    id: 19,
    category: "lips",
    discount: "-15%",
    discountPercent: 15,
    image: Img5,
    title: "Цукровий скраб для губ",
    price: "$8.99",
    oldPrice: "$10.49",
    description:
      "Делікатний цукровий скраб для м'якості губ. Видаляє відмерлі клітини шкіри.",
    features: [
      "Цукрові кристали",
      "Делікатне відлущування",
      "М'які губи",
      "Приємний смак",
    ],
  },
  {
    id: 20,
    category: "lips",
    discount: "-20%",
    discountPercent: 20,
    image: Img5,
    title: "Тінт-бальзам для губ",
    price: "$12.99",
    oldPrice: "$15.99",
    description:
      "Зволожуючий тінт-бальзам, що надає губам природного відтінку.",
    features: [
      "Природний відтінок",
      "Зволожує",
      "Стійкий ефект",
      "Без сухості",
    ],
  },
  {
    id: 21,
    category: "lips",
    discount: "-10%",
    discountPercent: 10,
    image: Img5,
    title: "Нічна маска для губ",
    price: "$14.99",
    oldPrice: "$16.49",
    description:
      "Інтенсивна нічна маска для відновлення губ. Зранку губи стають м'якими та доглянутими.",
    features: [
      "Нічна дія",
      "Інтенсивне живлення",
      "М'які губи зранку",
      "Без липкості",
    ],
  },
];
