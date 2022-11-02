const monsters = [
  {
    name: 'Лясун',
    path: 'forest',
    src: 'liasun',
    description: 'Рыбны тэкст рыбны тэкст і яшчэ адзін рыбны тэкст',
  },
  {
    name: 'Туросік',
    path: 'forest',
    src: 'turosik',
    description: 'Рыбны тэкст рыбны тэкст і яшчэ адзін рыбны тэкст',
  },
  {
    name: 'Дабрахот',
    path: 'forest',
    src: 'dabrahot',
    description: 'Рыбны тэкст рыбны тэкст і яшчэ адзін рыбны тэкст',
  },
];

export default function loadMonsters() { return { data: monsters }; }
