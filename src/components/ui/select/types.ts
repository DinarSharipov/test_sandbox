interface SelectProps {
  label?: string;
  selectedOption?: Option;
  options?: Option[];
  onSelect?: (option: Option)=> void;
}

type Option = {label: string; value: string};

export type { SelectProps, Option };
