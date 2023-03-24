import { FC, PropsWithChildren } from "react";

const TableRow: FC<PropsWithChildren> = (props: PropsWithChildren) => {
  const { children } = props;
  return (
    <tr>
      {children}
    </tr>
  )
};
export default TableRow;