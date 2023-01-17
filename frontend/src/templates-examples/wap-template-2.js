export const wapTemplate2 = {
  _id: "5e28393890dd7209a06d4e45",
  name: "Shoes 4 You site ",
  imgUrl: "https://res.cloudinary.com/dimirmc9j/image/upload/v1673782456/cld-sample-5.jpg",

  cmps: [
    {
      id: "wc02",
      type: "wap-header",
      info: {
        title: "Shoes 4 You",
        substitle: "Shoes for all the family!",
        btn: { "label": "sport life!", "link": "#wc03" }
      },
      theme: "theme-header-happy",
      style: {
        background: "url('https://res.cloudinary.com/dimirmc9j/image/upload/v1673819141/%D7%A6%D7%91%D7%90_%D7%A2%D7%9D_%D7%92%D7%9C_dxaphz.jpg')",
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
        title: "Best shoes shop in the middle east",
        substitle: "Come and buy your favorite shoe brand",
        btn: { "label": "sport life!", "link": "#wc03" }
      },
      theme: "theme-header-happy",
      style: {
        background: "url('https://res.cloudinary.com/dimirmc9j/image/upload/v1673819141/%D7%A6%D7%91%D7%90_%D7%A2%D7%9D_%D7%92%D7%9C_dxaphz.jpg')",
        font: "Fontush",
        color: "blue",
      }
    },
  ],
  isPublic: true
}