import { Meta, StoryFn } from '@storybook/react';
import { Input, Props as InputProps } from '@/components/Input';

export default {
  component: Input,
  title: 'Components/Form/Input',
} as Meta<typeof Input>;

const Template: StoryFn<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'default',
  state: 'normal',
};