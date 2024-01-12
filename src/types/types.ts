//--UI---------
//arrow

import { ElementType, HTMLAttributes, ReactNode } from "react";

export const directions = ["down", "up", "right", "left"] as const;
export type DirecionType = (typeof directions)[number];
export const defaultDirection = directions[0];

export const colors = ["grey", "blue"] as const;
export type ColorsType = (typeof colors)[number];
export const defaultColor: ColorsType = colors[0];

export const tags = ["button", "div"] as const;
export type ArrowTagType = (typeof tags)[number];
export const defaultTag: ArrowTagType = tags[0];

export interface ArrowProps {
  additionalClassname?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  direction?: DirecionType;
  color?: ColorsType;
  as?: ArrowTagType;
  "data-testid"?: string;
}

//audio-player

export type AudioControlsProps = {
  isPlaying: boolean;
  onPlay: () => void;
  onPause: () => void;
  isLoading: boolean;
};

export interface GetAudioParams {
  record?: string;
  partnership_id: string;
}

export interface AudioPlayerProps extends GetAudioParams {
  id: TableRowProps["id"];
}

export interface ProgressBarProps {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: number;
  max: number | string;
  durationRef: React.MutableRefObject<number>;
}

//avatar

export interface AvatarProps {
  additionalClassName?: string;
  url?: string;
  ["data-testid"]?: string;
}

//badge

export const statuses = ["bad", "good", "excellent"] as const;
export type StatusType = (typeof statuses)[number];
export const defaultStatus: StatusType = statuses[0];

export type BadgeProps = {
  status?: StatusType;
  additionalClassName?: string;
  ["data-testid"]?: string;
};

//call-icon

export const types = ["incoming", "outcoming", "missed", "non-call"] as const;
export type CallIconType = (typeof types)[number];
export const defaultType: CallIconType = types[0];

export type CallIconProps = {
  type?: CallIconType;
  ["data-testid"]?: string;
};

//dateDropdown

export const periods = ["3 дня", "Неделя", "Месяц", "Год"] as const;
export type PeriodType = (typeof periods)[number];
export type DatesType = {
  from: string;
  to: string;
};
export type ContentType = DatesType | PeriodType;
export const defaultPeriod: PeriodType = periods[0];

export interface DatePickerProps {
  additionalClassName?: string;
  content?: ContentType;
  onClickLeftButton?: React.MouseEventHandler<HTMLButtonElement>;
  onClickRightButton?: React.MouseEventHandler<HTMLButtonElement>;
  onClickContent?: React.MouseEventHandler<HTMLButtonElement>;
  "data-testid"?: string;
}

export type SelectionStateType = {
  value: ContentType;
  index: number;
};

export interface DateDropdownT {
  onSelect?: (value: ContentType) => void;
}

export type changeHandler = (
  dates: [start: Date | null, end: Date | null]
) => void;

export interface DateRangeProps {
  label?: string;
  changeHandler?: changeHandler;
}

export interface PopupProps {
  items?: PopupItemProps[];
  additionalClassName?: string;
}

export interface PopupItemProps {
  additionalClassName?: string;
  active?: boolean;
  content?: PeriodType | ReactNode;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  key?: string;
}

//dropDown

export interface DropDownProps {
  dropDownItems: string[];
  additionalClassName?: string;
  onSelect?: (value: string) => void;
  "date-testid"?: string;
}

//resetButton

export interface ResetButtonProps {
  additionalClassName?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  label?: string;
  visible?: boolean;
  "data-testid"?: string;
}

//sortingButton

export interface SortingButtonProps {
  label?: string;
  name: string;
  "data-testid"?: string;
}

//tag

export interface ComponentProps extends HTMLAttributes<HTMLOrSVGElement> {
  as?: ElementType;
}

//paramSlice

export const typesCallForDropdown = [
  "Все типы",
  "Входящие",
  "Исходящие",
] as const;
export type TypesCallForDropdownT = (typeof typesCallForDropdown)[number];
export const defaultTypeCallForDropdown = typesCallForDropdown[0];

export interface ParamsStateType {
  period: ContentType;
  callType: TypesCallForDropdownT;
  sortBy: "date" | "duration";
  order: "ASC" | "DESC";
  page: number;
  limit: number;
}

//audioSlice

export interface AudioSliceType {
  canPlay: AudioPlayerProps["id"] | null;
}

//CreateSearchQuery

export interface QueryParams extends ParamsStateType {}

export interface CreateSearchQueryT {
  periodQuery: {
    startDate: string;
    endDate: string;
  };
  callTypeQuery: "0" | "1" | null;
  sortByQuery: "date" | "duration";
  orderQuery: "ASC" | "DESC";
  limitQuery: string | undefined;
  offsetQuery: string | undefined;
}

//table

export interface TableRowProps {
  id: string | number;
  type: CallIconType;
  time: string;
  avatar?: string;
  phone: string;
  source?: string;
  badgeStatus?: StatusType;
  duration?: string;
  audio?: string;
  record?: string;
  partnership_id: string;
  date: string;
}

export type ReadableCallProps = {
  calls: TableRowProps[],
  order: ParamsStateType["order"]
};

export type MakePureCallsProps = Omit<ReadableCallProps, "order">

export interface TableBodyPorps {
  calls: TableRowProps[];
}

//SERVICES

export interface queryDataT {
  date_start: string; //YYYY-MM-DD
  date_end: string; //YYYY-MM-DD
  in_out?: "0" | "1";
  limit?: string | number;
  offset?: string | number;
  sort_by?: "date" | "duration";
  order?: "ASC" | "DESC";
  status?: "success" | "fail";
  from_type?: Array<"clients" | "new_clients" | "workers" | "app">;
  from_persons?: string[];
  sources?: Array<"from_site" | "yandex" | "google" | "empty" | number>;
  duration?: {
    gte: boolean; //sec
    lte: boolean; //sec
  };
  errors?: Array<
    | "noerrors"
    | "noscript"
    | "timeover"
    | "notavailable"
    | "noanswer"
    | "subscribercompleted"
  >;
  results?: Array<
    "order" | "message" | "preorder" | "candidate" | "candidateMessage"
  >;
  search?: string;
  ids?: string[];
  xls?: 1;
}
