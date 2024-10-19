import { Meta, StoryFn } from '@storybook/react';
import { Button, Props as ButtonProps } from '@/components/buttons/Button';
import useVisible from '@/hooks/useVisible';
import { Alert } from '@/components/alerts/Alert';

export default {
  component: Button,
  title: 'Components/Button/Button',
} as Meta<typeof Button>;

const Template: StoryFn<ButtonProps> = ({ children, ...rest }) => {
  const { open, ...restVisibleSet } = useVisible();

  return (
    <>
      <div className={'flex items-end h-[120px]'}>
        <Button {...rest} onClick={open}>{children}</Button>
      </div>

      <Alert
        title={'You clicked the button!'} 
        type={'success'} 
        duration={1000}
        {...restVisibleSet} />
    </>

  );
};

export const Default = Template.bind({});

Default.args = {
  color: 'main',
  size: 'default',
  variant: 'outlined',
  children: 'Button',
};