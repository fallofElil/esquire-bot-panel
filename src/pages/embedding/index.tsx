import React, { FC, useContext, useEffect } from 'react';
import Embedding from "../../components/embedding/embedding";
import {AppContext} from "../../context/app-context";

const EmbeddingPage: FC = () => {
  const { changeHeaderTitle } = useContext(AppContext)

  useEffect(() => {
    changeHeaderTitle('Сообщение для Встраиваний на твоих текстовых каналах')
  }, [])

  return (
    <Embedding />
  )
}

export default EmbeddingPage
