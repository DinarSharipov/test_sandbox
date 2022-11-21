import React, { useState } from 'react';
import styled from 'styled-components';
import { HorizontalAlign, Space } from '../../../flex/enums';
import Flex from '../../../flex/Flex';
import Button from '../Button';

const MACRO_MIN_HEIGHT = 200;
const MACRO_MAX_HEIGHT = 600;

const ToolbarWrapper = styled(Flex.Column)`
  flex: 1;
  background-color: blanchedalmond;
  padding: 10px 20px;
  justify-content: space-between;
`;

const MacroCreator = styled(Flex.Column)<{macroSize: number}>`
  min-height: ${(props) => props.macroSize}px;
  justify-content: space-between;
`;

const Resizer = styled.div`
  height: 3px;
  border-style: double;
  border-bottom: 1px solid grey;
  cursor: row-resize;
`;

const Toolbar: React.FC = () => {
  const [showMacroBlock, setShowMacroBlock] = useState(false);
  const [macroSize, setMacroSize] = useState(MACRO_MIN_HEIGHT);

  return (
    <ToolbarWrapper
      gap={5}
      vertical={Space.between}
    >
      <Flex.Row
        gap={5}
        horizontal={HorizontalAlign.right}
      >
        <Button onClick={() => setShowMacroBlock(true)}>Создать макрос</Button>
      </Flex.Row>
      {
        showMacroBlock && (
          <MacroCreator
            macroSize={macroSize}
          >
            <Flex.Row
              horizontal={HorizontalAlign.right}
              flexInitial
            >
              <Button onClick={() => setShowMacroBlock(false)}>Закрыть</Button>
            </Flex.Row>
            <Resizer
              onDrag={(e) => {
                if (e.clientY > MACRO_MIN_HEIGHT && e.clientY < MACRO_MAX_HEIGHT) {
                  setMacroSize(e.clientY);
                }
              }}
              draggable
            />
          </MacroCreator>
        )
      }
    </ToolbarWrapper>
  );
};

export default Toolbar;
