import { InputHTMLAttributes } from 'react';

type InputSize = 'small' | 'default' | 'large';
type InputState = 'normal' | 'error' | 'success';

export interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: InputSize; // input height size
  state?: InputState;
}

export function Input(props: Props) {
  const { size, state, ...rest } = props;

  return (
    <input
      className={style({ state, size })}
      {...rest} />
  );
}

const inputConfig = {
  size: {
    small: 'py-1.5',
    default: 'py-2.5 ',
    large: 'py-3.5',
  },
  state: {
    normal: 'ring-main focus: outline-main',
    error: 'ring-red focus: outline-red',
    success: 'ring-blue focus: outline-blue',
  }
};

const style = ({ state = 'normal', size = 'default' }: Pick<Props, 'state' | 'size'>) => `
  block w-full 
  rounded-md 
  border-0 
  pl-5
  pr-20 
  text-gray-900 
  ring-1
  ring-inset 
  placeholder:text-gray-400 
  sm:text-sm 
  sm:leading-6
  ${inputConfig.size[size]}
  ${inputConfig.state[state]}
`;
  
