export const wapTemplate4 = {
  _id: "5e28393890dd7209a06d4e44",
  name: "Yoad the nomad",
  imgUrl: "https://www.lametayel.co.il/limages/ee4ee243bba8ea4ddab76e1758ff4dc4.jpg?size=830x467",

  cmps: [
    {
      id: "wc02",
      type: "wap-header",
      info: {
        title: "Mario neapolitan pizza",
        substitle: "Treditional  neapolitan pizza!",
        btn: { "label": "Travel", "link": "#wc03" }
      },
      theme: "theme-header-happy",
      style: {
        background: "url('https://www.lametayel.co.il/limages/ee4ee243bba8ea4ddab76e1758ff4dc4.jpg?size=830x467')",
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
        title: "Travel vloger ",
        substitle: "Travel with me around the world",
        btn: { "label": "Travel!", "link": "#wc03" }
      },
      theme: "theme-header-happy",
      style: {
        background: "url('https://www.lametayel.co.il/limages/ee4ee243bba8ea4ddab76e1758ff4dc4.jpg?size=830x467')",
        font: "Fontush",
        color: "blue",
      }
    },
  ],
  isPublic: true
}