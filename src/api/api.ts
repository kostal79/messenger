import { CallTypesT, DateEndT, DateStartT } from '../store/slices/paramsSlice';
import axios from 'axios';

const url = "https://api.skilla.ru/mango/getList"
const token = "testtoken";

export type reqParams = {
  dateStart: DateStartT,
  dateEnd: DateEndT,
  callType: CallTypesT,
}

export async function getData(reqParams: reqParams) {
  const { data } = await axios.post(url, {}, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return data
}


// async function getRecord(recordId, partnerId) {
//   const token = "testtoken";
//   const res = await axios.post(`https://api.skilla.ru/mango/getRecord?record=${recordId}&partnership_id=${partnerId}`, {}, {
//     headers: {
//       "Content-type": ["audio/mpeg", "audio/x-mpeg", "audio/x-mpeg-3", "audio/mpeg3"],
//       "Content-Transfer-Encoding": "binary",
//       "Content-Disposition": 'filename="record.mp3"',
//       Authorization: `Bearer ${token}`
//     }
//   })
//   console.log(res)
// }

// async function getLines() {
//   const token = "testtoken";
//   const res = await axios.post("https://api.skilla.ru/mango/getLines", {}, {
//     headers: {
//       Authorization: `Bearer ${token}`
//     }
//   })
//   console.log(res.data)
// }

// getList(url)
// getRecord("MToxMDA2NzYxNToxNDM0ODcwNDQzMzow", "136")
// getLines();
