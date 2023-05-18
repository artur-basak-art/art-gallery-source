const ghosts = [
  {
    name: "",
    path: "ghosts",
    items: [

    ],
  },
];

export default function loadGhosts() {
  return {
    data: {
      categories: ghosts,
      title: "БЕЛАРУСКІЯ ЗДАНІ",
      description: `Яшчэ ў распрацоўцы...Хутка будзе!`,
    },
  };
}
