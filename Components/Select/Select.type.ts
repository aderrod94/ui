export type OptionType = {
  id: number;
  label: string;
  value: string;
};

export type OptionsType = OptionType[];

export type PropsType = {
  id: string;
  name: string;
  options: OptionsType;
  label?: string | undefined;
  hint?: string | undefined;
  error?: string | undefined;
  placeholder?: string | undefined;
  isDisabled?: boolean | undefined;
};

export type SelectStyledType = {
  isDisabled: boolean;
};

export type ValueStyledType = {
  isValue: boolean;
};

export type ControlStyledType = {
  isActive: boolean;
  isError: boolean;
};

export type OptionStyledType = {
  isActive: boolean;
};
