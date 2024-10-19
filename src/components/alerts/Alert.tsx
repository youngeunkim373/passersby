import { ReactNode } from 'react';

import { VisibleSet } from '@/hooks/useVisible';
import { CheckSolidCircle as Check } from '@/assets/icons/Check';
import { Close, CloseSolidCircle as Error } from '@/assets/icons/Close';
import { ExclamationMarkSolidCircle as ExclamationMark } from '@/assets/icons/ExclamationMark';
import { InfoSolidCircle as Info } from '@/assets/icons/Info';

type AlertType = 'info' | 'success' | 'danger' | 'warning';

export interface Props extends Pick<VisibleSet, 'isVisible' | 'close'> {
  type?: AlertType;
  title: string;
  content?: string;
  closalble?: boolean;
  duration?: number | 'always';
  icon?: ReactNode;
  showIcon?: boolean;
}

export function Alert({ 
  type = 'info', 
  title, 
  content, 
  closalble = true,
  duration = 3000,
  icon, 
  showIcon = true,
  isVisible,
  close, 
}: Props) {
  const style = getStyle({ type });
  const internalIcon = getIcon({ type });

  if(duration !== 'always') setTimeout(close, 3000);

  if(!isVisible) return <></>;

  return (
    <div className={style.wrapper} role={'alert'}>
      {showIcon && <div className={style.icon}>{icon ?? internalIcon}</div>}

      <div>
        <div className={style.title}>{title}</div>
        {content && (
          <div className={style.content}>
            {content} 
          </div>
        )}
      </div>

      {closalble && (
        <button 
          type={'button'} 
          className={style.close} 
          onClick={close}>
          <Close />
        </button>
      )}
    </div>
  );
}

const getIcon = ({ type }: {type: AlertType}) => {
  switch(type) {
  case 'info':
    return <Info />;
  case 'success':
    return <Check />;
  case 'danger':
    return <Error />;
  case 'warning': 
    return <ExclamationMark />;
  default: 
    return null;
  }
};

const alertConfig = {
  info: 'bg-main-pale text-main border-main',
  success: 'bg-blue-pale text-blue border-blue',
  danger: 'bg-red-pale text-red border-red',
  warning: 'bg-orange-pale text-orange border-orange',
} as const;

const getStyle = ({ type = 'info' }: Pick<Props, 'type'>) => ({
  wrapper: `
    border
    border-[0.5px]
    fixed
    flex
    left-1/2
    my-4 
    p-4 
    rounded-lg 
    text-sm
    top-0
    transform 
    -translate-x-1/2 
    w-[calc(100%-2rem)]
    z-50
    ${alertConfig[type]}
  `,
  icon: `
    flex-shrink-0 
    h-4
    inline 
    me-3
    mt-[4px]
    w-4
  `,
  title: 'text-lg font-semibold',
  content: 'my-2 text-sm whitespace-pre-line',
  close: `
    h-8
    inline-flex
    items-center
    justify-center
    ms-auto
    p-1.5
    rounded-lg
    text-blue-500
    w-8
    -mx-1.5
    -my-1.5
  `,
});