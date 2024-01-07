import { ContentType, DatesType, PeriodType, periods } from "../../../types/types";

export function isDatesType(content: ContentType): content is DatesType {
    return (content as DatesType).from !== undefined && (content as DatesType).to !== undefined;
  }
  
export function isPeriodType(content: ContentType): content is PeriodType {
    return periods.includes(content as PeriodType);
  }