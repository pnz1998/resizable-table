/** @jsxImportSource @emotion/react */
import { FC } from "react";
import { css } from '@emotion/react';

interface TableColProps {
  id: string,
  width: number
};

const TableCol: FC<TableColProps> = (props: TableColProps) => {
  const { id, width } = props;
  return (
    <col
      id={id}
      span={1}
      width={width}
    />
  )
};
export default TableCol;