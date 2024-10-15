import { Meta, StoryFn } from '@storybook/react';
import { Button, Props as ButtonProps } from '@/components/buttons/Button';

export default {
  component: Button,
  title: 'Components/Button/Button',
} as Meta<typeof Button>;

const Template: StoryFn<ButtonProps> = (args) => {
  const { children, ...rest } = args;
  return <Button {...rest}>{children}</Button>;
};

export const Default = Template.bind({});

Default.args = {
  color: 'main',
  size: 'default',
  variant: 'outlined',
  children: 'Button',
};