import axios from "axios";
import { GetAudioParams } from "../types/types";

export async function getAudio(params: GetAudioParams) {
  const res = await axios.post(
    "https://api.skilla.ru/mango/getRecord",
    {},
    {
      headers: {
        Authorization: "Bearer testtoken",
        "Content-type": [
          "audio/mpeg",
          "audio/x-mpeg",
          "audio/x-mpeg-3",
          "audio/mpeg3",
        ],
        "Content-Transfer-Encoding": "binary",
        "Content-Disposition": 'filename="record.mp3"',
      },
      params: params,
      responseType: 'blob'
    }
  );
  return res.data;
}
