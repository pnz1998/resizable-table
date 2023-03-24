import { FC, PropsWithChildren } from "react";

interface TableColGroupProps {

};

const TableColGroup: FC<PropsWithChildren<TableColGroupProps>> = (props: PropsWithChildren<TableColGroupProps>) => {
  const { children } = props;
  return (
    <colgroup>
      {children}
    </colgroup>
  )
};
export default TableColGroup;