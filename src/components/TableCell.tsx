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
  id: string,
  tableWidth: number
  changeCellWidth: (id: string, cellWidth: number) => void,
  cellWidth: number
};
const TableCell: FC<TableCellProps> = (props: TableCellProps) => {
  const { id, tableWidth, changeCellWidth, cellWidth } = props;
  const [ colSize, setColSize ] = useState<ColSize>({ width: tableWidth/3, height: 50 });
  const { updateColSize }= useContext(ResizeColSizeContext);

  return (
    <td
      id={id}
      css={css`
        height: 50px;
        position: relative;
      `}
    >
      <div>123</div>
      <div>
        <Resizable
          style={{
            // border: "1px solid #000",
            position: "absolute",
            top: "0",
            zIndex: '1'
          }}
          size={{
            width: colSize.width,
            height: 50,
          }}
          minWidth={50}
          minHeight={50}
          enable={{ top:false, right:true, bottom:false, left:false, topRight:false, bottomRight:false, bottomLeft:false, topLeft:false }}
          onResizeStop={(e, direction, ref, d) => {
            setColSize({ width: colSize.width + d.width, height: colSize.height + d.height });
            // updateColSize(colSize.width + d.width, colSize.height + d.height);
            changeCellWidth(id, cellWidth + d.width);
          }}
          handleStyles={{
            right: {
              width: "4px",
              top: '1px',
              right: 0,
              // height: "210%",
              // background: "#000",
            }
          }}
        >
        </Resizable>
        <div
          css={css`
            height: 100px;
            width: 4px;
            background: #000;
            position: absolute;
            top: -20px;
            right: 0;
          `}
        ></div>
      </div>
    </td>
  )
};
export default TableCell;