import { useGetDataListQuery } from "../../services/dataList";
import { createSearchQuery } from "../../utils/create-search-query/createSearchQuery";
import { useAppSelector } from "../../store/hooks";
import { CallIconType, TableRowProps } from "../../types/types";
import dateFormat from "dateformat";
import { toReadableTime } from "../../ui/audio-player/helpers";

const UseFecthData = () => {
  const queryParams = useAppSelector((state) => state.data);
  const { data, isLoading, error, isSuccess } = useGetDataListQuery(
    createSearchQuery(queryParams)
  );

  function getCallType(result: any): CallIconType {
    const succsess = result.status === "Дозвонился";
    if (result.in_out === 1) {
      if (succsess) return "incoming" as const;
      else return "missed" as const;
    } else {
      if (succsess) return "outcoming" as const;
      else return "non-call" as const;
    }
  }

  function getTimeOfCall(timeString: string): TableRowProps["time"] {
    return dateFormat(new Date(timeString), "HH:MM");
  }

  function getPhone(result: any): TableRowProps["phone"] {
    const incomingFlag = result.in_out === 1;
    if (incomingFlag)
      return result.from_number.replace(
        /^(7)(\d{3})(\d{3})(\d{2})(\d{2})$/,
        "+$1 ($2) $3-$4-$5"
      );
    else
      return result.to_number.replace(
        /^(7)(\d{3})(\d{3})(\d{2})(\d{2})$/,
        "+$1 ($2) $3-$4-$5"
      );
  }

  function getDuration(time: number) {
    return time ? toReadableTime(time) : "";
  }

  function getOnlyDate(date: string) {
    return date.split(" ")[0]
  }

  let calls: TableRowProps[] = [];

  if (data && !isLoading) {
    console.log(data);
    calls = data.results.map((result: any): TableRowProps => {
      return {
        id: result.id,
        type: getCallType(result),
        time: getTimeOfCall(result.date),
        avatar: result.person_avatar,
        phone: getPhone(result),
        source: result.source,
        badgeStatus: "excellent",
        duration: getDuration(result.time),
        record: result.record,
        partnership_id: result.partnership_id,
        audio: result.record,
        date: getOnlyDate(result.date),
      };
    });
  }
  return { calls, isLoading, error, isSuccess };
};

export default UseFecthData;
