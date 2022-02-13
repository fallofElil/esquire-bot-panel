import React from 'react'
import { RouteProps } from 'react-router-dom';

import MainPage from "../pages/main";
import EmbeddingPage from "../pages/embedding";
import {PageTitles} from "../constants/page-titles";

export enum paths {
  ROOT = '/',
  EMBEDDING = '/embedding',
}

export type AppRoute = RouteProps & {
  path: paths;
  label: string;
}

export const AppRoutes: AppRoute[] = [
  {
    path: paths.ROOT,
    label: PageTitles.ROOT,
    element: <MainPage/>,
  },
  {
    path: paths.EMBEDDING,
    label: PageTitles.EMBEDDING,
    element: <EmbeddingPage/>,
  }
];
