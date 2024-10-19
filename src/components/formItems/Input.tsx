import { InputHTMLAttributes, ReactNode } from 'react';

type InputSize = 'small' | 'default' | 'large';
type InputState = 'normal' | 'error' | 'success';

export interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'> {
  size?: InputSize; // input height size
  state?: InputState;
  prefix?: ReactNode | string; 
  suffix?: ReactNode | string; 
}

export function Input({ 
  // custom
  size, 
  state, 
  prefix, 
  suffix, 
  // original
  disabled = false,
  type,
  ...inputProps
}: Props) {  
  const style = getStyle({ disabled, size, state });

  return (
    <div className={style.wrapper}>
      <div className={style.fixCommon + style.prefix}>{prefix}</div>
      <input
        className={style.input}
        disabled={disabled}
        type={type ?? 'text'}
        {...inputProps}
      />
      <div className={style.fixCommon + style.suffix}>{suffix}</div>
    </div>
  );
}

const inputConfig = {
  size: {
    small: 'py-1.5',
    default: 'py-2.5 ',
    large: 'py-3.5',
  },
  state: {
    normal: 'ring-gray-300 focus-within:ring-main',
    error: 'ring-red ',
    success: 'ring-blue',
  }
};

const getStyle = ({ 
  disabled,
  state = 'normal', 
  size = 'default' 
}: Pick<Props, 'disabled'| 'state' | 'size'>) => ({
  wrapper: `
    flex
    items-center
    px-3
    ring-1
    ring-inset 
    rounded-md 
    w-full 
    focus-within:ring-1.3
    ${disabled && 'bg-gray-200'}
    ${inputConfig.size[size]}
    ${inputConfig.state[state]}
  `,
  input: `
    bg-transparent
    text-gray-900 
    w-full 
    focus:outline-none
    placeholder:text-gray-400 
    read-only:cursor-not-allowed
    sm:text-sm 
    sm:leading-6
  `,
  fixCommon: `
    flex
    items-center
    max-h-20
    pointer-events-none   
    text-gray-500 
  `,
  prefix: 'mr-1.5',
  suffix: 'ml-1.5',
});
  
