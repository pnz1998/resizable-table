import styled from '@emotion/styled'

export const ResizeControl = styled.div`
  width: 3px;
  height: 50px;
  background-color: hotpink;
  z-index: 1;
  position: absolute;
  top: 0;
  right: -1px;
  &:hover {
    cursor: ew-resize;
    color: hotpink;
  }
`

export const Td = styled.td`
  position: relative;
`