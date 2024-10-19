import { Meta, StoryFn } from '@storybook/react';

import { Input, Props as InputProps } from '@/components/formItems/Input';
import { User } from '@/assets/icons/User';

export default {
  component: Input,
  title: 'Components/Form/Input',
  argTypes: {
    prefix: {
      control: { type: 'radio' },
      options: [ 'string', 'icon', 'none' ],
    },
    suffix: {
      control: { type: 'radio' },
      options: [ 'string', 'icon', 'none' ],
    },
  },

} as Meta<typeof Input>;

const options = {
  fix: {
    'string': '$',
    'icon': <User />,
    'none': null,
  }
};

type FixType = keyof typeof options.fix;

const Template: StoryFn<InputProps> = (args) => {
  const { prefix, readOnly, suffix, ...rest } = args;

  const prefixSet: React.ReactNode = options.fix[prefix as FixType];
  const suffixSet: React.ReactNode = options.fix[suffix as FixType];

  return (
    <Input 
      prefix={prefixSet} 
      readOnly={readOnly}
      suffix={suffixSet} 
      {...rest} />
  );
};

export const Default = Template.bind({});

Default.args = {
  disabled: false,
  prefix: <User />,
  readOnly: false,
  size: 'default',
  state: 'normal',
  suffix: '@gmail.com',
};