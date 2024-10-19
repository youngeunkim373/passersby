import { ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'solid' | 'outlined' | 'text' | 'link';
type ButtonColor = 'main' | 'red' | 'blue';
type ButtonSize = 'small' | 'default' | 'large';

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ButtonColor;
  size?: ButtonSize;
  variant?: ButtonVariant;
}

export function Button({ 
  children, 
  className,
  color = 'main', 
  size = 'default', 
  variant = 'outlined', 
  ...buttonProps 
}: Props) {
  const style = getStyle({ color, size, variant });

  return (
    <button className={style + className} {...buttonProps}>
      {children}
    </button>
  );
}

interface ButtonConfig {
  size: Record<ButtonSize, string>;
  variant: Record<ButtonVariant, {
    shape?: string;
    color: Record<ButtonColor, string>;
  }>;
}

const buttonConfig: ButtonConfig = {
  size: {
    small: 'py-1.5',
    default: 'py-2.5 ',
    large: 'py-3.5',
  },
  variant: {
    solid: {
      shape: 'shadow-sm text-white',
      color: {
        main: 'bg-main hover:bg-main-dark',
        red: 'bg-red hover:bg-red-dark',
        blue: 'bg-blue hover:bg-blue-dark',
      }
    },
    outlined: {
      shape: 'bg-transparent border shadow-sm',
      color: {
        main: 'border-main text-main hover:border-main-light hover:text-main-light',
        red: 'border-red text-red hover:border-red-light hover:text-red-light',
        blue: 'border-blue text-gray-700 hover:border-blue-light hover:text-blue-light',
      }
    },
    text: {
      color: {
        main: 'bg-transparent text-main hover:bg-main-pale',
        red: 'text-red hover:bg-red-pale',
        blue: 'text-blue hover:bg-blue-pale',
      }
    },
    link: {
      color: {
        main: 'bg-transparent text-main hover:text-main-light',
        red: 'text-red hover:text-red-light',
        blue: 'text-blue hover:text-blue-light',
      }
    },
  }
} as const;

const getStyle = ({ color = 'main', size = 'default', variant = 'outlined' }: Pick<Props, 'color' | 'size' | 'variant'>) => `
  duration-200
  flex 
  font-semiboldvariant
  justify-center
  leading-6
  rounded-md
  text-sm
  transition-all
  w-full  
  ${buttonConfig.variant[variant].shape}
  ${buttonConfig.variant[variant].color[color]}
  ${buttonConfig.size[size]}
`;