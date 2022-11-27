import React, { useState } from 'react';
import styled from 'styled-components';
import { HorizontalAlign, Space } from '../../../flex/enums';
import Flex from '../../../flex/Flex';
import Button from '../Button';
import Select from '../select/Select';
import { Option } from '../select/types';

const ToolbarWrapper = styled(Flex.Column)`
  flex: 1;
  background-color: blanchedalmond;
  padding: 10px 20px;
  justify-content: space-between;
`;

const MacroCreator = styled(Flex.Column)`
  justify-content: space-between;
`;

const SearchElementContainer = styled(Flex.Row)`
  align-self: flex-start;
`;

const Toolbar: React.FC = () => {
  const [showMacroBlock, setShowMacroBlock] = useState(false);
  const [searchElementTag, setSearchElementTag] = useState<Option>({ label: 'Кнопка', value: 'button' });
  const [selectedItem, setSelectedItem] = useState<Element>();

  const selectItemHandler = (el: Element) => {
    console.log(el);

    setSelectedItem(el);
  };

  const searchElementHandler = () => {
    const items = document.querySelectorAll(searchElementTag.value);
    items.forEach((item) => {
      if (item.classList.contains('ext')) {
        return;
      }
      item.classList.add('ext');
      const mark = document.createElement('button');
      mark.classList.add('ext');
      mark.textContent = 'Найденный элемент';
      item.appendChild(mark);
      mark.addEventListener('click', () => selectItemHandler(mark));
    });
  };

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
          <MacroCreator>
            <Flex.Row
              horizontal={HorizontalAlign.right}
              flexInitial
            >
              <Button onClick={() => setShowMacroBlock(false)}>Закрыть</Button>
            </Flex.Row>
            <Flex.Column>
              <SearchElementContainer flexInitial>
                <Select
                  label="Поиск элемента"
                  onSelect={(e) => setSearchElementTag(e)}
                  options={[
                    { label: 'Кнопка', value: 'button' },
                    { label: 'Поле ввода', value: 'input' },
                  ]}
                  selectedOption={searchElementTag}
                />
                <Button onClick={searchElementHandler}>Искать</Button>
                {
                  selectedItem && (
                    <Flex.Column>
                      <span>
                        ТЭГ:
                        {' '}
                        {selectedItem.tagName}
                      </span>
                      <span>
                        ТЕКСТ:
                        {' '}
                        {selectedItem.textContent}
                      </span>
                    </Flex.Column>
                  )
                }
              </SearchElementContainer>
            </Flex.Column>
          </MacroCreator>
        )
      }
    </ToolbarWrapper>
  );
};

export default Toolbar;
