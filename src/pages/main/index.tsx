import React, { FC, useContext, useEffect } from 'react';
import {AppContext} from "../../context/app-context";

const MainPage: FC = () => {
  const { changeHeaderTitle } = useContext(AppContext);

  useEffect(() => {
    changeHeaderTitle('Главная страница');
  }, [])

  return (
    <div>контент главной страницы</div>
  )
}

export default MainPage;
