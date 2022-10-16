import kfc_appImg from "../media/kfc_app.png";
import unbounce_appImg from "../media/unbounce_app.png";
import weather_appImg from "../media/weather_app.png";

export const projects = [
  {
    title: "Weather App",
    description:
      "A web application for getting weather information based on location.",
    image: weather_appImg,
    tags: ["HTML", "JavaScript", "CSS"],
    source: "https://github.com/pandit0305/myweather-app/tree/main/weather",
    liveVersion: "https://bejewelled-zabaione-697319.netlify.app/",
    id: 0,
  },
  {
    title: "KFC Clone",
    description:
      "A fully responsive e-commerce website, built with React, React Router.",
    image: kfc_appImg,
    tags: ["React", "JavaScript", "Firebase", "CSS"],
    source: "https://github.com/pandit0305/cumbersome-circle-9157/tree/main/kfc-app",
    liveVersion: "https://kfc-app-pandit0305.vercel.app/",
    id: 1,
  },
  {
    title: "Unbounce Clone",
    description:
      "This web applications Build landing pages faster with AI and support the customers",
    image: unbounce_appImg,
    tags: ["React", "JavaScript", "CSS"],
    source: "https://github.com/dan-josh/annoyed-geese-7107/tree/main/unbounce",
    liveVersion: "https://fluffy-smakager-0c7aa2.netlify.app/index.html",
    id: 2,
  },
];
