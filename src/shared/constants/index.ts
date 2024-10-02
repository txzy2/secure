import {
  Coins,
  User,
  MapPinHouse,
  Cctv,
  CassetteTape,
  Radar,
  Search,
  UserRound,
  ShieldX,
  BriefcaseBusiness,
  Fingerprint,
  HeartCrack,
  HousePlus,
  HeartHandshake,
  LockKeyholeOpen
} from 'lucide-vue-next';

interface Service {
  title: string;
  description: string;
  icon: any;
}

export const services: Service[] = [
  {
    title: 'Экономическая безопасность',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus et soluta atque! Praesentium, corrupti cum ea qui, itaque odit harum corporis, sed doloribus suscipit amet recusandae autem nostrum repellat minus.',
    icon: Coins
  },
  {
    title: 'Личная безопасность',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus et soluta atque! Praesentium, corrupti cum ea qui, itaque odit harum corporis, sed doloribus suscipit amet recusandae autem nostrum repellat minus.',
    icon: User
  },
  {
    title: 'Глонасс, тахограф',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus et soluta atque! Praesentium, corrupti cum ea qui, itaque odit harum corporis, sed doloribus suscipit amet recusandae autem nostrum repellat minus.',
    icon: MapPinHouse
  },
  {
    title: 'Видеонаблюдение с ИИ',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus et soluta atque! Praesentium, corrupti cum ea qui, itaque odit harum corporis, sed doloribus suscipit amet recusandae autem nostrum repellat minus.',
    icon: Cctv
  },
  {
    title: 'Детектор ЛЖИ',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus et soluta atque! Praesentium, corrupti cum ea qui, itaque odit harum corporis, sed doloribus suscipit amet recusandae autem nostrum repellat minus.',
    icon: Radar
  },
  {
    title: 'Проверка помещений на предмет прослушки',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus et soluta atque! Praesentium, corrupti cum ea qui, itaque odit harum corporis, sed doloribus suscipit amet recusandae autem nostrum repellat minus.',
    icon: CassetteTape
  },
  {
    title: 'Вскрытие замков',
    description: 'text',
    icon: LockKeyholeOpen
  }
];

export const links: { title: string; path: string }[] = [
  { title: 'О нас', path: '/about' },
  { title: 'Услуги', path: '#services' },
  { title: 'Контакты', path: '#contacts' }
];

export const sections: Service[] = [
  {
    title: 'Плановые проверки',
    description:
      'Регулярная оценка состояния безопасности компании помогает выявить потенциальные угрозы, нарушения или слабые места в системах контроля. Это важная мера для поддержания порядка и соблюдения законодательства.',
    icon: Search
  },
  {
    title: 'Проверка увольняемых и принимаемых лиц',
    description:
      'Проверка сотрудников, покидающих компанию или устраивающихся на работу, позволяет избежать утечек информации, корпоративных конфликтов и защитить ваши интересы от возможных внутренних угроз.',
    icon: UserRound
  },
  {
    title: 'Внутренние служебные расследования',
    description:
      'При возникновении инцидентов или конфликтов внутри компании мы проводим профессиональные служебные расследования для выяснения всех обстоятельств и принятия справедливых решений.',
    icon: ShieldX
  },
  {
    title: 'Подбор кандидатов на вышестоящую должность',
    description:
      'Ключевые позиции в компании требуют от кандидатов не только компетентности, но и надежности. Мы предлагаем проверку топ-менеджеров и руководителей на честность, профессионализм и наличие конфликтов интересов.',
    icon: BriefcaseBusiness
  },
  {
    title: 'Выявление краж, хищений и "откатов"',
    description:
      'Наши специалисты помогут быстро и эффективно расследовать случаи краж, хищений, а также "откатных" схем, сохраняя при этом конфиденциальность процесса',
    icon: Fingerprint
  }
];

export const servicesFiz: Service[] = [
  {
    title: 'Выявление супружеской неверности',
    description:
      'Мы проведем discreetное расследование, позволяющее получить факты и доказательства, чтобы разрешить сомнения и принять взвешенные решения по личным и семейным вопросам.',
    icon: HeartCrack
  },
  {
    title: 'Проверка и отбор домашнего персонала',
    description:
      'Безопасность в вашем доме — это доверие к тем, кто окружает вас и вашу семью. Мы тщательно проверим кандидатов на домашние должности, чтобы вы могли быть уверены в их честности и квалификации.',
    icon: HousePlus
  },
  {
    title: 'Решение семейных проблем',
    description:
      ' Если в семье возникают сложные ситуации, такие как наркозависимость у подростков, кражи или другие проблемы, наши специалисты помогут выявить причины и предложить варианты решения. Мы работаем конфиденциально и максимально деликатно.',
    icon: HeartHandshake
  }
];
