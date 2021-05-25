import React, { FC, useContext } from "react";
import styled from "styled-components";
import Input from "../common/input";
import FormItem from "../common/form-item";
import {EmbeddingContext} from "./embedding-context";
import {Input as AntInput} from "antd";

type WrapperProps = {
  indicatorColor: string;
};

const StyledWrapper = styled.section<WrapperProps>`
  padding: 1.5rem;
  
  &::before {
    content: "";
    top: 0;
    left: 0;
    position: absolute;
    width: 4px;
    background: ${props => props.indicatorColor};
  }
`;

const Embedding: FC = () => {
  const { indicatorColor } = useContext(EmbeddingContext);
  const { TextArea } = AntInput;

  return (
    <StyledWrapper indicatorColor={indicatorColor}>
      <FormItem name="author-name">
        <Input placeholder="Имя автора" />
      </FormItem>
      <FormItem name="embedding-content" label="Заголовок">
        <TextArea placeholder="Содержимое..." />
      </FormItem>
    </StyledWrapper>
  );
}

export default Embedding;
