import React, { FC, useState } from 'react';
import {Space} from "antd";
import styled from "styled-components";
import {FormatPainterOutlined} from '@ant-design/icons';
import { ColorPicker, useColor } from "react-color-palette";
import 'react-color-palette/lib/css/styles.css';
import Button from "../../../common/button";

const StyledPicker = styled(ColorPicker)`
  position: absolute;
  top: 0;
  left: 0;
`

const StyledBtnClose = styled.button`
  position: absolute;
  right: -20px;
  top: 10px;
  border: 1px solid white;
  background-color: tomato;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  color: white;
  cursor: pointer;
`

const StyledPickerBtn = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  
  span {
    font-size: 2.3rem;
  }
`;

const PaletteWrapper = styled.div`
  position: absolute;
  width: 350px;
`

const ColorCell = styled.div<{ color: string }>`
  box-sizing: border-box;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: ${props => props.color};
`

const EmbeddingColorPalette: FC = () => {
  const [color, setColor] = useColor('hex', '#121212');
  const [showPalette, setShowPalette] = useState<boolean>(false);

  return (
    <>
      <Space direction="horizontal" align="center">
        <ColorCell color={color.hex} />
        <StyledPickerBtn shape="circle" icon={<FormatPainterOutlined />}
                         onClick={() => setShowPalette(true)} />
      </Space>

      {showPalette && <PaletteWrapper>
        <StyledPicker width={350} height={150} hideHSB
                     color={color} onChange={setColor} dark />
        <StyledBtnClose onClick={() => setShowPalette(false)}>
          x
        </StyledBtnClose>
      </PaletteWrapper>}
    </>
  );
}

export default EmbeddingColorPalette;
