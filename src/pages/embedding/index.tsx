import React, { FC, useContext, useEffect } from 'react';
import EmbeddingBaseWrapper from "../../components/embedding/base";
import {AppContext} from "../../context/app-context";
import {EmbeddingContextProvider} from "../../components/embedding/embedding-context";

const EmbeddingPage: FC = () => {
  const { changeHeaderTitle, headerTitle } = useContext(AppContext)

  useEffect(() => {

    changeHeaderTitle('Сообщение для Встраиваний на твоих текстовых каналах')
  }, [headerTitle])

  return (
    <EmbeddingContextProvider>
      <EmbeddingBaseWrapper />
    </EmbeddingContextProvider>
  )
}

export default EmbeddingPage
