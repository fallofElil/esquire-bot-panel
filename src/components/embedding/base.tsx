import React, { FC } from "react";
import styled from "styled-components";
import {Row, Col, Form} from "antd";
import {colors} from "../../constants/styles";
import FormItem from "../common/form-item";
import Input from "../common/input";
import Embedding from "./embedding";
import EmbeddingColorPalette from "./components/color-palette";

const StyledForm = styled(Form)`
  padding: 1rem;
  background-color: ${colors.darkPrimary};
  border-radius: 8px;
`;

const EmbeddingBaseWrapper: FC = () => {
  const {useForm} = Form;

  const [form] = useForm();

  return (
    <Row>
      <Col xs={24} sm={24} md={24} lg={16} xl={16} xxl={16}>
        <StyledForm form={form} layout="vertical">
          <FormItem name="description" labelText="Описание">
            <Input placeholder="Введите краткое описание" />
          </FormItem>
          <Embedding />
          <EmbeddingColorPalette />
        </StyledForm>
      </Col>
    </Row>
  );
}

export default EmbeddingBaseWrapper;
