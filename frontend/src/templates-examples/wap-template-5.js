export const wapTemplate2 = {
  _id: "5e28393890dd7209a06d4e45",
  name: " Doctor Moshe dentist site",
  imgUrl: "https://img.freepik.com/free-vector/dentist-man-examining-patient-teeth-white-background_1308-92452.jpg?w=2000",

  cmps: [
    {
      id: "wc02",
      type: "wap-header",
      info: {
        title: "Dentist services",
        substitle: "Dentist services for all the family!",
        btn: { "label": "Health", "link": "#wc03" }
      },
      theme: "theme-header-happy",
      style: {
        background: "url('https://img.freepik.com/free-vector/dentist-man-examining-patient-teeth-white-background_1308-92452.jpg?w=2000')",
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
        title: "Professional dentist",
        substitle: "Every type of treatment",
        btn: { "label": "Health!", "link": "#wc03" }
      },
      theme: "theme-header-happy",
      style: {
        background: "url('https://img.freepik.com/free-vector/dentist-man-examining-patient-teeth-white-background_1308-92452.jpg?w=2000')",
        font: "Fontush",
        color: "blue",
      }
    },
  ],
  isPublic: true
}