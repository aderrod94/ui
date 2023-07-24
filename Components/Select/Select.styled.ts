import styled from 'styled-components';

import {
  SelectStyledType,
  ValueStyledType,
  ControlStyledType,
  OptionStyledType,
} from './Select.type';

export const SelectStyled = styled.div<SelectStyledType>`
  font-size: 16px;

  ${(props) => {
    if (props.isDisabled)
      return `
        opacity: 0.5;
        pointer-events: none;
      `;
  }}
`;

export const WrapperStyled = styled.div`
  position: relative;
`;

export const ControlStyled = styled.div<ControlStyledType>`
  outline: none;
  background-color: #ffffff;
  border-radius: 6px;
  padding: 10px;
  min-height: 45px;
  box-sizing: border-box;
  cursor: pointer;
  transition: border 300ms ease;
  border: 2px solid #dadada;

  &:hover {
    border-color: #5c3bfe;
  }

  ${(props) => {
    if (props.isError) return `border-color: #fc3f1d;`;
  }}

  ${(props) => {
    if (props.isActive) return `border-color: #5c3bfe;`;
  }}
`;

export const ValueStyled = styled.p<ValueStyledType>`
  color: ${(props) => (props.isValue ? '#140c40' : '#adaabc')};
  margin: 0;
`;

export const OptionsStyled = styled.div`
  width: 100%;
  z-index: 1000;
  box-sizing: border-box;
  position: absolute;
  margin-top: 12px;
  border: 2px solid #5c3bfe;
  background-color: #ffffff;
  border-radius: 6px;
  padding: 10px;
`;

export const OptionStyled = styled.div<OptionStyledType>`
  color: ${(props) => (props.isActive ? '#140c40' : '#adaabc')};
  cursor: pointer;
  transition: all 300ms ease;

  &:hover {
    color: ${(props) => (props.isActive ? '#140c40' : '#5c3bfe')};
  }

  &:not(&:last-child) {
    margin-bottom: 10px;
  }
`;

export const LabelStyled = styled.label`
  color: #140c40;
  font-weight: 500;
  margin: 0 0 5px 0;
  display: block;
`;

export const HintStyled = styled.p`
  color: #9c99ae;
  font-weight: 300;
  margin: 5px 0 0 0;
`;

export const ErrorStyled = styled.p`
  color: #fc3f1d;
  margin: 5px 0 0 0;
`;
