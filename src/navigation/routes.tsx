import {ComponentType} from 'react';
import {RouteComponentProps} from "react-router";

import MainPage from "../pages/main";
import EmbeddingPage from "../pages/embedding";
import {PageTitles} from "../constants/page-titles";

export enum paths {
  ROOT = '/',
  EMBEDDING = '/embedding',
}

export type AppRoute = {
  path: paths;
  label: string;
  // eslint-disable-next-line
  component: ComponentType<RouteComponentProps<any>> | ComponentType<any>;
}

export const AppRoutes: AppRoute[] = [
  {
    path: paths.ROOT,
    label: PageTitles.ROOT,
    component: MainPage,
  },
  {
    path: paths.EMBEDDING,
    label: PageTitles.EMBEDDING,
    component: EmbeddingPage,
  }
];
