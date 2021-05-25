import React, {createContext, useState} from "react";
import {ContextWithChildren} from '../../types';
import {noop} from "../../utils/noop";

export type EmbeddingContextValue = {
  indicatorColor: string;
  changeIndicatorColor(color: string): void
}

export const initialValues: EmbeddingContextValue = {
  indicatorColor: '#FFFFFF',
  changeIndicatorColor: noop,
};

export const EmbeddingContext = createContext<EmbeddingContextValue>(initialValues)

export function EmbeddingContextProvider(props: ContextWithChildren): JSX.Element {
  const [indicatorColor, setIndicatorColor] = useState<string>('#FFFFFF');

  const value: EmbeddingContextValue = {
    indicatorColor,
    changeIndicatorColor: setIndicatorColor,
  };

  return (
    <EmbeddingContext.Provider value={value}>
      {props.children}
    </EmbeddingContext.Provider>
  )
}
