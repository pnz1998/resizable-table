/** @jsxImportSource @emotion/react */
import { Resizable } from "re-resizable";
import { FC, useContext, useState } from "react";
import { ResizeColSizeContext } from "./tableContext";
import { css } from '@emotion/react';

interface ColSize {
  width: number,
  height: number
};
interface TableCellProps {
  id: string
};
const TableCell: FC<TableCellProps> = (props: TableCellProps) => {
  const { id } = props;
  const [ colSize, setColSize ] = useState<ColSize>({ width: 181, height: 50 });
  const { updateColSize }= useContext(ResizeColSizeContext);

  return (
    <td
      id={id}
      css={css`
        width: 100px;
        height: 100px;
        position: relative;
      `}
    >
      <div
        css={css`
          position: relative;
        `}
      >
        123
      </div>
      <Resizable
        css={css`
          border: 1px solid #000;
          position: absolute !important;
          top: 0;
        `}
        size={{
          width: "100%",
          height: "100%",
        }}
        minWidth={50}
        minHeight={50}
        onResizeStart={(e, direction, ref) => {
          console.log(direction)
        }}
        onResizeStop={(e, direction, ref, d) => {
          setColSize({ width: colSize.width + d.width, height: colSize.height + d.height });
          updateColSize(colSize.width + d.width, colSize.height + d.height);
        }}
      >
      </Resizable>
    </td>
  )
};
export default TableCell;