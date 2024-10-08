const news = [
  {
    name: `[Белліт] Выйшлі шыкоўныя выданні пра беларускіх нячысцікаў`,
    date: 'Жнівень 9, 2024',
    url: 'https://bellit.info/news/vyjshli-shykounyja-vydanni-pra-bjelaruskikh-njachyscikau.html',
  },
  {
    name: `"Лепельскі Край": «ШЛЯХ ЦМОКА» ПО ЗАГАДОЧНЫМ ТРОПАМ ЗАПОВЕДНИКА`,
    date: 'Жнівень 22, 2023',
    url: 'https://lepel-kraj.by/novosti/turizm/shlyah-cmoka-po-zagadochnym-tropam-zapovednika-22-08-2023',
    paper: 'lepel-kraj.png',
  },
  {
    name: `"Новости Клецка и Клецкого района. Да новых перамог": У Клецка появился свой мифический персонаж. Как он выглядит`,
    date: 'Сакавік 31, 2023',
    url: 'https://www.kleck.by/?p=85128',
    paper: 'kleck.png',
  },
  {
    name: `АиФ: Из леса и болот. Программист из Гродно рисует героев белорусской мифологии`,
    date: 'Студзень 5, 2023',
    url: 'https://aif.by/timefree/uvlechenie/iz_lesa_i_bolot_programmist_iz_grodno_risuet_geroev_belorusskoy_mifologii',
    paper: 'aif.jpeg',
  },
  {
    name: `Інтэрв'ю дзіцячаму часопісу "Бярозка" (№10 / 2022)`,
    date: 'Лістапад 1, 2022',
    url: 'http://www.dompressy.by/2022/10/21/anons-dzyacyataga-numara/',
    paper: 'bjarozka.pdf',
  },
  {
    name: `Трепещите, дизайн идет – Беларусский бестиарий`,
    date: 'Кастрычнік 31, 2022',
    url: 'https://right.by/blog/digests/201-digest/',
  },
  {
    name: `Артыкул у часопісе Chrysalis Mag – Belarusian Contemporary Art Magazine`,
    date: 'Кастрычнік 11, 2022',
    url: 'https://chrysalismag.org/project/niacysciki',
  },
  {
    name: `Інтэрв'ю онлайн-часопісу "Аловак"`,
    date: 'Верасень 27, 2022',
    url: 'https://alovakmag.by/tvorcyja-ludzi/belaruskiya-nyachystsiki-artura-basaka.html',
  },
  {
    name: `Фестываль міфалогіі "Шлях Цмока"-2022 маімі вачамі (Блог HOLIDAY.BY)`,
    date: 'Жнівень 22, 2022',
    url: 'https://obzoor.by/shopping/hudi-s-malevichem-v-trende-zachem-dizajnery-ispolzujut-nacionalnye-tradicii-i-iskusstvo-v-svoih-rabotah/',
  },
  {
    name: `Разварот пра "Нячысцікаў" у забаўляльным дзіцячым часопісе "Каламбур" (№4 / 2022)`,
    date: 'Красавік 4, 2022',
    url: 'https://drive.google.com/file/d/10hIaUv8avD57cbUYJ5MHwbv6KV5N-_x3/view?usp=sharing',
    paper: 'Kalambur_04-2022.pdf',
  },
  {
    name: `[OBZOOR] Худы "з Малевічам" у трэндзе? Для чаго дызайнеры выкарыстоўваюць нацыянальныя традыцыі і мастацтва ў сваіх працах`,
    date: 'Лістапад , 2021',
    url: 'https://obzoor.by/shopping/hudi-s-malevichem-v-trende-zachem-dizajnery-ispolzujut-nacionalnye-tradicii-i-iskusstvo-v-svoih-rabotah/',
  },
  // {
  //   name: `Русалки без хвоста, ухающий Шеша и Возила с конской головой: какими были белорусские боги и духи`,
  //   date: 'Лістапад 27 , 2021',
  //   url: 'https://smartpress.by/idea/istoriya/15163/?sphrase_id=4736081',
  // },
  {
    name: `Адукар: Сем пачварыкаў з беларускай міфалогіі, якія могуць напалохаць больш за прывідаў`,
    date: 'Кастрычнік 29, 2021',
    url: 'https://adukar.com/by/news/abiturientu/belaruskaya-m-falog-ya-falklor-nyachysc-k-pachvary',
  },
];

export default function loadNews() { return { data: news }; }
