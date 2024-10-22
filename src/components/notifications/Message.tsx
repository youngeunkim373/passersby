'use client'; 
import { Notification } from '@/components/notifications/Notification';
import { useMessageContext } from '@/contexts/MessageContext';

export function Message() {
  const { notificationProps, isVisible, hide } = useMessageContext();

  if(!notificationProps?.title) return <></>;

  return (
    <Notification 
      isVisible={isVisible}
      close={hide}
      {...notificationProps} />
  );
}