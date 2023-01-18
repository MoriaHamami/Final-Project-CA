export const wapTemplate3 = {
  _id: "5e28393890dd7209a06d4e43",
  name: "Mario Pizza site ",
  imgUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg",

  cmps: [
    {
      id: "wc02",
      type: "wap-header",
      info: {
        title: "Mario neapolitan pizza",
        substitle: "Treditional  neapolitan pizza!",
        btn: { "label": "Foodies", "link": "#wc03" }
      },
      theme: "theme-header-happy",
      style: {
        background: "url('https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg')",
        font: "Fontush",
        color: "red",
      }
    },
    {
      id: "wc03",
      type: "wap-container",
      info: {
        "dir": "row",
        "cmps": [
          {},
          {}
        ]
      },
      theme: "theme-container-base",
      style: {
      }
    },
    {
      id: "wc04",
      type: "wap-main",
      info: {
        title: "Italy is here order now ",
        substitle: "Come and buy your favorite shoe brand",
        btn: { "label": "Foodies!", "link": "#wc03" }
      },
      theme: "theme-header-happy",
      style: {
        background: "url('https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg')",
        font: "Fontush",
        color: "blue",
      }
    },
  ],
  isPublic: true
}