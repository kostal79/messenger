import { TableRowProps } from "../../../types/types";
import AudioFile from "./Гражданская Оборона - Все Идет По Плану.mp3";



const label = "Вчера";
const rows = 3;
const content: TableRowProps[] = [
  {
    id: 1,
    type: "incoming",
    time: "19:00",
    avatar: "",
    phone: "+7 (987) 567-17-12",
    source: "Rabota.ru",
    badgeStatus: "excellent",
    duration: "12:06",
    partnership_id: "1",
    date: "2024-01-11 10:27:46",
  },
  {
    id: 2,
    type: "incoming",
    time: "19:00",
    avatar: "",
    phone: "+7 (987) 567-17-12",
    source:
      "Санкт-Петербург источник в три строки, кто-то так пишет, ну ладно, но некрасиво",
    badgeStatus: "excellent",
    duration: "12:06",
    audio: AudioFile,
    partnership_id: "1",
    date: "2024-01-11 11:27:46",
  },
  {
    id: 3,
    type: "outcoming",
    time: "19:00",
    avatar: "",
    phone: "+7 (987) 567-17-12",
    source:
      "Санкт-Петербург источник в три строки, кто-то так пишет, ну ладно, но некрасиво",
    badgeStatus: "excellent",
    duration: "12:06",
    audio: AudioFile,
    partnership_id: "1",
    date: "2024-01-11 12:27:46"
  },
];