import { MakePureCallsProps } from "../../../types/types";
import TableRow from "../TableRow";

export const makePureCalls = ({ calls }: MakePureCallsProps) => {
  const pureCalls = calls.map((call) => (
    <TableRow {...call} key={`call_id_${call.id}`} />
  ));
  return pureCalls;
};
