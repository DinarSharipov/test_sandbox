import React, { createRef, useMemo, useState } from 'react';
import { useClickAway } from 'react-use';
import Input from '../input/Input';
import Label from '../label/Label';
import SelectStyle from './SelectStyle';
import { SelectProps, Option } from './types';

/** Компонент селект (простой) */
const Select: React.FC<SelectProps> = ({
  onSelect, options, selectedOption, label,
}) => {
  /** Состояние опций */
  const [showOptions, setShowOptions] = useState(false);

  /** Реф для опций */
  const optionsRef = useMemo(() => createRef<HTMLDivElement>(), []);

  /** Хук для отлова клика вне опций */
  useClickAway(optionsRef, () => setShowOptions(false));

  /** Хэндлер выбора опций */
  const selectOptionHandler = (option: Option) => {
    if (onSelect) {
      onSelect(option);
    }
    setShowOptions(false);
  };

  return (
    <SelectStyle.Container>
      {label && <Label size="m">{label}</Label>}
      <Input
        onClick={() => setShowOptions(!showOptions)}
        value={selectedOption?.label}
      />
      {showOptions
      && (
        <SelectStyle.OptionsRelative>
          <SelectStyle.OptionsAbsolute ref={optionsRef}>
            {options?.map((option) => (
              <SelectStyle.Option
                key={option.value}
                onClick={() => selectOptionHandler(option)}
              >
                {option.label}
              </SelectStyle.Option>
            ))}
          </SelectStyle.OptionsAbsolute>
        </SelectStyle.OptionsRelative>
      )}
    </SelectStyle.Container>
  );
};

export default React.memo(Select);
