import { ComponentType } from 'react';
import { RouteComponentProps } from "react-router";

import EmbeddingPage from "../pages/embedding";

export enum paths {
  ROOT = '/',
  EMBEDDING = '/embedding',
}

export type AppRoute = {
  path: paths;
  label: string;
  component: ComponentType<RouteComponentProps<any>> | ComponentType<any>;
}

export const AppRoutes: AppRoute[] = [
  {
    path: paths.EMBEDDING,
    label: 'Встраивания',
    component: EmbeddingPage,
  }
];
