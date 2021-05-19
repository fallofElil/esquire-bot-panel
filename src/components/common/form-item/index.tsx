import React, { FC } from "react";
import styled from 'styled-components';
import {Form, FormItemProps} from "antd";
import {objectFilter} from "../../../utils/object-filter";

const {Item} = Form;

const StyledItem = styled(Item)`
  & label {
    &::after {
      display: none;
    }
  }
`;

const StyledLabel = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.3em;
  color: white;
`;

type Props = FormItemProps & {
  labelText?: string;
}

const FormItem: FC<Props> = (props) => {
  const {labelText, children} = props;

  const itemProps = objectFilter<Props>(props, 'labelText') as FormItemProps;

  return (
    <StyledItem label={labelText ? <StyledLabel>{labelText}</StyledLabel> : null} {...itemProps}>
      {children}
    </StyledItem>
  );
};

export default FormItem;
