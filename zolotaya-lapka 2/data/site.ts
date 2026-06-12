export const site = {
  name: "Золотая Лапка",
  tagline: "Питомник британских золотых шиншилл",
  phone: "+7 989 710-36-47",
  email: "hello@zolotaya-lapka.ru", // замените на свою почту
  city: "Москва",
  instagram: "https://www.instagram.com/nika_nikysia6841official",
  telegram: "https://t.me/nika_nikysia",
  tiktok: "https://www.tiktok.com/@nikanikysiaofficial",
  facebook: "https://www.facebook.com/nika.nikysia.7",
  whatsapp: "https://wa.me/79897103647",
};

export type KittenStatus = "available" | "reserved" | "sold";

export const kittens: {
  name: string;
  color: string;
  sex: "кот" | "кошка";
  born: string;
  status: KittenStatus;
  price: string;
  photo: string;
}[] = [
  { name: "Оскар", color: "ny 12 — золотая завуалированная", sex: "кот", born: "12.03.2026", status: "available", price: "от 90 000 ₽", photo: "/gallery/kitten-oskar.jpg" },
  { name: "Луна", color: "ny 11 — золотая затушёванная", sex: "кошка", born: "12.03.2026", status: "available", price: "от 100 000 ₽", photo: "/gallery/kitten-luna.jpg" },
  { name: "Барон", color: "ny 12, изумрудные глаза", sex: "кот", born: "28.01.2026", status: "reserved", price: "—", photo: "/gallery/kitten-baron.jpg" },
  { name: "Злата", color: "ny 25 — золотой тикированный", sex: "кошка", born: "28.01.2026", status: "sold", price: "—", photo: "/gallery/kitten-zlata.jpg" },
];

export const parents = [
  {
    name: "Aurum Grand Maximus",
    role: "Производитель · кот",
    titles: "Grand International Champion (WCF)",
    color: "BRI ny 12, золотая завуалированная шиншилла",
    about:
      "Плюшевый гигант с идеальным изумрудным цветом глаз и яркой чёрной обводкой. Носитель лучших золотых линий Европы.",
    photo: "/gallery/parent-aurum.jpg",
  },
  {
    name: "Nika Golden Pearl",
    role: "Производительница · кошка",
    titles: "Champion of Breed (WCF)",
    color: "BRI ny 11, золотая затушёванная",
    about:
      "Нежная и невероятно ласковая мама. Тёплый абрикосово-золотой окрас без единого холодного оттенка.",
    photo: "/gallery/parent-nika.jpg",
  },
];

export const reviews = [
  {
    author: "Анна, Санкт-Петербург",
    text: "Забрали Симбу полгода назад — это самый плюшевый и спокойный кот на свете. Заводчица была на связи 24/7, помогала с кормом и адаптацией.",
  },
  {
    author: "Дмитрий и Ольга, Казань",
    text: "Котёнок приехал с полным пакетом документов, привит, приучен к лотку и когтеточке с первого дня. Глаза — реально изумруды!",
  },
  {
    author: "Мария, Москва",
    text: "Долго выбирали питомник и не пожалели. Видно, что котята растут в любви: наш Лорд абсолютно ручной и доверчивый.",
  },
];

export const achievements = [
  "Grand International Champion WCF — 2025",
  "Best in Show, выставка «Гран-При Royal Canin» — 2024",
  "Лучший котёнок породы, WCF-ринг — 2024",
  "Номинация Best of Best — 2023",
];

export const faq = [
  {
    q: "В каком возрасте котята переезжают в новый дом?",
    a: "Не раньше 3–3,5 месяцев. К этому моменту котёнок полностью привит, социализирован, приучен к лотку и когтеточке, и готов к переезду без стресса.",
  },
  {
    q: "Какие документы получает котёнок?",
    a: "Метрика (или родословная WCF), ветеринарный паспорт с отметками о прививках, договор купли-продажи и подробная памятка по уходу и кормлению.",
  },
  {
    q: "Чем кормить золотую шиншиллу?",
    a: "Котята передаются на качественном корме супер-премиум класса. Мы даём запас корма на первые дни и всегда консультируем по питанию.",
  },
  {
    q: "Возможна ли доставка в другой город?",
    a: "Да, организуем бережную доставку по России и за рубеж с проверенными зооперевозчиками или личным сопровождением.",
  },
  {
    q: "Как зарезервировать котёнка?",
    a: "Оставьте заявку на сайте или напишите нам в мессенджер. Резерв оформляется по предоплате, мы присылаем фото и видео малыша каждую неделю до переезда.",
  },
];

export const gallery: {
  src: string;
  alt: string;
  tall?: boolean;
  wide?: boolean;
}[] = [
  { src: "/gallery/gallery-11.jpg", alt: "Два золотых британца отдыхают на пледе", wide: true },
  { src: "/gallery/gallery-13.jpg", alt: "Золотой котёнок в полный рост", tall: true },
  { src: "/gallery/gallery-01.jpg", alt: "Серебристый котёнок с голубыми глазами", tall: true },
  { src: "/gallery/gallery-02.jpg", alt: "Золотая британка на прогулке", tall: false },
  { src: "/gallery/gallery-03.jpg", alt: "Золотой британец на каменных ступенях", tall: false },
  { src: "/gallery/gallery-04.jpg", alt: "Белоснежный котёнок на руках", tall: true },
  { src: "/gallery/gallery-05.jpg", alt: "Золотая шиншилла машет лапкой", tall: false },
  { src: "/gallery/gallery-06.jpg", alt: "Молодая золотая кошка с зелёными глазами", tall: false },
  { src: "/gallery/gallery-07.jpg", alt: "Серебристый котёнок с розовым кулоном", tall: true },
  { src: "/gallery/gallery-08.jpg", alt: "Котёнок с колокольчиком и голубыми глазами", tall: false },
  { src: "/gallery/gallery-09.jpg", alt: "Белый котёнок с ярко-голубыми глазами", tall: false },
  { src: "/gallery/gallery-10.jpg", alt: "Золотая шиншилла с огромными глазами", tall: true },
  { src: "/gallery/gallery-12.jpg", alt: "Золотые британцы — мама и дочка показывают язычок", wide: true },
  { src: "/gallery/gallery-14.jpg", alt: "Золотая кошка с сиреневым ошейником среди растений", wide: true },
];
