/** @jsxImportSource @emotion/react */
import { FC } from "react";
import { css } from '@emotion/react';
import TableCell from "./TableCell";

const Table: FC = () => {

  return (
    <table
      border={1}
      css={css`
        border-collapse: collapse;
        margin: 0 auto;
      `}
    >
      <tbody>
        <tr>
          <TableCell id="1"/>
          <TableCell id="2"/>
          <TableCell id="3"/>
        </tr>
        {/* <tr>
          <TableCell id="1"/>
          <TableCell id="2"/>
          <TableCell id="3"/>
        </tr> */}
      </tbody>
    </table>
  )
};
export default Table;