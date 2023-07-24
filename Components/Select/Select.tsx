import { useState, useRef, memo } from 'react';

import { OptionType, OptionsType, PropsType } from './Select.type';

import {
  SelectStyled,
  WrapperStyled,
  ControlStyled,
  ValueStyled,
  OptionsStyled,
  OptionStyled,
  LabelStyled,
  HintStyled,
  ErrorStyled,
} from './Select.styled';

import { useOnClickOutside } from './hooks';

const Select = ({
  id,
  name,
  options,
  isDisabled,
  placeholder,
  label,
  hint,
  error,
}: PropsType) => {
  const [selectValue, setSelectValue] = useState<OptionType | null>();
  const [isOptionsVisible, setIsOptionsVisible] = useState<boolean>(false);

  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useOnClickOutside(wrapperRef, () => {
    setIsOptionsVisible(false);
  });

  const onControlClickHandler = () => {
    setIsOptionsVisible(!isOptionsVisible);
  };

  const onOptionClickHandler = (option: OptionType) => {
    setSelectValue(option);
    setIsOptionsVisible(false);
  };

  const getOptions = (options: OptionsType) => {
    return options.map((option: OptionType) => {
      const isActive = option.id === selectValue?.id;

      return (
        <OptionStyled
          key={option.id}
          isActive={isActive}
          onClick={() => onOptionClickHandler(option)}
        >
          {option.label}
        </OptionStyled>
      );
    });
  };

  return (
    <SelectStyled isDisabled={isDisabled}>
      {label && <LabelStyled htmlFor={id}>{label}</LabelStyled>}

      <WrapperStyled ref={wrapperRef}>
        <ControlStyled
          onClick={onControlClickHandler}
          isActive={isOptionsVisible}
          isError={!!error}
        >
          <ValueStyled isValue={!!selectValue}>
            {selectValue?.label || placeholder}
          </ValueStyled>
          <input id={id} name={name} type='hidden' value={selectValue?.label} />
        </ControlStyled>

        {isOptionsVisible && (
          <OptionsStyled>{getOptions(options)}</OptionsStyled>
        )}
      </WrapperStyled>

      {hint && <HintStyled>{hint}</HintStyled>}
      {error && <ErrorStyled>{error}</ErrorStyled>}
    </SelectStyled>
  );
};

export default memo(Select);
