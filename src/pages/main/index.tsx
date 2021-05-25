import React, { useContext, useEffect } from 'react';
import {AppContext} from "../../context/app-context";

const MainPage = () => {
  const { changeHeaderTitle } = useContext(AppContext);

  useEffect(() => {
    changeHeaderTitle('Главная страница');
  }, [])

  return (
    <div>контент главной страницы</div>
  )
}

export default MainPage;
