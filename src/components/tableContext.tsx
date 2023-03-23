import { createContext, PropsWithChildren, useState } from "react";

interface ColSizeContextModel {
  colSize: {
    width: number,
    height: number
  },
  updateColSize: (width: number, height: number) => void
};

const colSizeContextInitialValue: ColSizeContextModel = {
  colSize: {
    width: 181,
    height: 50
  },
  updateColSize: () => {}
};

export const ResizeColSizeContext = createContext<ColSizeContextModel>(colSizeContextInitialValue);

export const ResizeColSizeProvider = (props: PropsWithChildren) => {
  const { children } = props;
  const [ colSize, setColSize ] = useState<{ width: number, height: number }>({ width: 181, height: 50 });

  const updateColSize = (width: number, height: number) => {
    setColSize({ width: width, height: height })
  };
  return (
    <ResizeColSizeContext.Provider value={{ colSize: colSize, updateColSize }}>
      {children}
    </ResizeColSizeContext.Provider>
  )
};