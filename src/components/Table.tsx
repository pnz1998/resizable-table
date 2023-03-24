/** @jsxImportSource @emotion/react */
import { FC } from "react";
import { css } from '@emotion/react';
import TableCell from "./TableCell";
import { useState } from 'react';
import TableCol from "./TableCol";
import TableColGroup from "./TableColGroup";
import TableRow from "./TableRow";

const Table: FC = () => {
  const [ cellWidth, setCellWidth ] = useState<number>(300/3);
  const [ cellWidth2, setCellWidth2 ] = useState<number>(300/3);
  const [ cellWidth3, setCellWidth3 ] = useState<number>(300/3);

  const changeCellWidth = (id: string, cellWidth: number) => {
    let dom = document.getElementById("table");
    if(!dom) return;
    let currentNode = dom.childNodes[0].childNodes[Number(id)-1] as Element;
    let nextNode = dom.childNodes[0].childNodes[Number(id)] as Element;

    currentNode.setAttribute("width", `${cellWidth}px`);
    nextNode.setAttribute("width", `${200 - cellWidth}px`);
    setCellWidth(cellWidth);
    setCellWidth2(200 - cellWidth);
  };

  return (
    <table
      id="table"
      border={1}
      css={css`
        border-collapse: collapse;
        margin: 50px auto;
        width: 300px;
      `}
    >
      <TableColGroup>
        <TableCol id="1" width={cellWidth} />
        <TableCol id="2" width={cellWidth2} />
        <TableCol id="3" width={cellWidth3} />
      </TableColGroup>
      <tbody>
        <TableRow>
          <TableCell id="1" tableWidth={300} cellWidth={cellWidth} changeCellWidth={changeCellWidth}/>
          <TableCell id="2" tableWidth={300} cellWidth={cellWidth} changeCellWidth={changeCellWidth}/>
          <TableCell id="3" tableWidth={300} cellWidth={cellWidth} changeCellWidth={changeCellWidth}/>
        </TableRow>
        <TableRow>
          <TableCell id="1" tableWidth={300} cellWidth={cellWidth} changeCellWidth={changeCellWidth}/>
          <TableCell id="2" tableWidth={300} cellWidth={cellWidth} changeCellWidth={changeCellWidth}/>
          <TableCell id="3" tableWidth={300} cellWidth={cellWidth} changeCellWidth={changeCellWidth}/>
        </TableRow> 
      </tbody>
    </table>
  )
};
export default Table;