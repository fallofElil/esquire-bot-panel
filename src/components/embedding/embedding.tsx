import React, { FC, useContext } from "react";
import styled from "styled-components";
import Input from "../common/input";
import FormItem from "../common/form-item";
import {EmbeddingContext} from "./embedding-context";
import {Input as AntInput} from "antd";
import {colors} from "../../constants/styles";

type WrapperProps = {
  indicatorColor: string;
};

const { TextArea } = AntInput;

const StyledWrapper = styled.section<WrapperProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: .5rem;
  
  &::before {
    content: "";
    top: 0;
    left: 0;
    position: absolute;
    width: 4px;
    height: 100%;
    background: ${props => props.indicatorColor};
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  
  & > * {
    margin-bottom: 1.2rem;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const StyledTitleLabel = styled.h4`
  margin-bottom: 8px;
  font-size: 1.4rem;
  line-height: 1.5715em;
  color: #FFFFFF;
`

const StyledTextArea = styled(TextArea)`
  background-color: #2D303E;
  border: 1px solid #393C49;
  border-radius: 8px;
  font-size: 14px;
  line-height: 1.4em;
  color: #E0E6E9;

  &:hover, &:focus {
    border-color: ${colors.primary};
    box-shadow: none;
  }

  &::placeholder {
    color: #889898;
  }
`;

const Embedding: FC = () => {
  const { indicatorColor } = useContext(EmbeddingContext);

  return (
    <>
      <StyledTitleLabel>
        Встраивание
      </StyledTitleLabel>
      <StyledWrapper indicatorColor={indicatorColor}>
        <FormItem name="author">
          <Input placeholder="Имя автора" />
        </FormItem>
        <FormItem name="title">
          <Input placeholder="Текст заголовка" />
        </FormItem>
        <FormItem name="content">
          <StyledTextArea placeholder="Содержимое..." rows={5} />
        </FormItem>
      </StyledWrapper>
    </>
  );
}

export default Embedding;
