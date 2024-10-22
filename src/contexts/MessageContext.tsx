'use client';
import { createContext, PropsWithChildren, useContext, useState } from 'react';

import { Props as NotificationProps } from '@/components/notifications/Notification';
import useVisible from '@/hooks/useVisible';

type MessageProps = Omit<NotificationProps, 'isVisible' | 'close'>;

// @ts-ignore
const MessageContext = createContext<ReturnType<typeof useMessage>>(null);

const useMessage = () => {
  const { isVisible, open, close } = useVisible(false);
  const [ notificationProps, setNotificationProps ] = useState<MessageProps | null>(null);

  const showErrorMessage = (props: Omit<MessageProps, 'type'>) => {
    setNotificationProps({
      type: 'danger',
      ...props
    });

    open();
  };

  const hide = () => { 
    close();
  };

  return {
    isVisible,
    notificationProps,
    showErrorMessage,
    hide,
  };
};

export function useMessageContext() {
  return useContext(MessageContext);
}

export function MessageContextProvider({ children }: PropsWithChildren) {
  const state = useMessage();

  return <MessageContext.Provider value={state}>{children}</MessageContext.Provider>;
} 