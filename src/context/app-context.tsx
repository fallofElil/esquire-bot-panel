import React, {createContext, useState} from "react";
import {noop} from "../utils/noop";
import {ContextWithChildren} from "../types";

export type AppContextValue = {
  headerTitle: string;
  changeHeaderTitle(title: string): void
}

export const initialValues: AppContextValue = {
  headerTitle: '',
  changeHeaderTitle: noop,
};

export const AppContext = createContext<AppContextValue>(initialValues)


// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function AppContextProvider(props: ContextWithChildren) {
  const [headerTitle, setHeaderTitle] = useState<string>('');

  const value: AppContextValue = {
    headerTitle,
    changeHeaderTitle: setHeaderTitle,
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )
}
