/** @jsxImportSource @emotion/react */
import { FC } from "react";
import { css } from '@emotion/react';
import { useEffect } from 'react';
import { ResizeControl, Td } from "./StyledComponents";

const Table: FC = () => {
  const resizableTable = (id: string, clientX: number) => {
    const table = document.getElementById("table");
    if(!table) return;
    console.log(table.offsetLeft)
    for(let i=1; i<=2; i++) {
      const node = table.childNodes[0].childNodes[i-1].childNodes[Number(id)-1] as HTMLElement;
      const nextNode = table.childNodes[0].childNodes[i-1].childNodes[Number(id)] as HTMLElement;
      // node.style.width = 
    }
  };
  useEffect(() => {});
  return (
    <table
      id="table"
      border={1}
      css={css`
        border-collapse: collapse;
        table-layout: fixed;
        margin: 50px auto;
        box-sizing: border-box;
        width: 300px;
        height: 100px;
      `}
    >
      <tbody>
        <tr id="1">
          <Td id="1">
            <ResizeControl
              onMouseDown={e => {
                e.preventDefault();
                resizableTable("1", e.clientX);
              }}
              onMouseMove={e => {
                  
              }}
            />
          </Td>
          <Td id="2">
            <ResizeControl 
              onMouseDown={e => {
                e.preventDefault();
                resizableTable("2", e.clientX);
              }}
            />
          </Td>
          <Td id="3">
            <ResizeControl 
              onMouseDown={e => {
                e.preventDefault();
                resizableTable("3", e.clientX);
              }}
            />
          </Td>
        </tr>
        <tr id="2">
          <Td id="1">
            <ResizeControl 
              onMouseDown={e => {
                e.preventDefault();
                resizableTable("1", e.clientX);
              }}
            />
          </Td>
          <Td id="2">
            <ResizeControl 
              onMouseDown={e => {
                e.preventDefault();
                resizableTable("2", e.clientX);
              }}
            />
          </Td>
          <Td id="3">
            <ResizeControl 
              onMouseDown={e => {
                e.preventDefault();
                resizableTable("3", e.clientX);
              }}
            />
          </Td>
        </tr>
      </tbody>
    </table>
  )
};
export default Table;