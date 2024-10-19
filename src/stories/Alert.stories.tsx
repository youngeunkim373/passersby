import { Meta, StoryFn } from '@storybook/react';

import { Alert, Props as AlertProps } from '@/components/alerts/Alert';
import { Button } from '@/components/buttons/Button';
import useVisible from '@/hooks/useVisible';

export default {
  component: Alert,
  title: 'Components/Alert/Alert',
  argTypes: {
    duration: {
      control: { type: 'select' },
      options: [ 'always', 1, 2, 3, 5 ],
    },
    icon: {
      control: { type: 'boolean' },
    },
  },
} as Meta<typeof Alert>;

const Template: StoryFn<AlertProps> = ({ icon, ...rest }) => {
  const { open, ...restVisibleSet } = useVisible(rest.showIcon);
  const iconSet = icon ? <>🐋</> : undefined; 

  return (
    <>
      <div className={'flex items-end h-[150px]'}>
        <Button 
          variant={'solid'}
          onClick={open}>
        Open Alert
        </Button>
      </div>

      <Alert 
        {...rest} 
        {...restVisibleSet} 
        icon={iconSet} />
    </>
  );
};

export const Default = Template.bind({});

Default.args = {
  type: 'info',
  title: 'This is title',
  content: 'This is content',
  closalble: true,
  duration: 'always',
  showIcon: true,
  icon: false,
};