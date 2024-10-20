import { Meta, StoryFn } from '@storybook/react';
import { FieldValues, useForm } from 'react-hook-form';

import { FormItem } from '@/components/formItems/FormItem';
import { Input } from '@/components/formItems/Input';
import { Form } from '@/components/formItems/Form';

export default {
  component: FormItem,
  title: 'Components/Form/FormItem',
} as Meta<typeof FormItem>;

const errorOptions = {
  input: {
    required: 'Enter a value',
    pattern: {
      value: /^\d{5}$/,
      message: 'Enter only 5 digits',
    },
    minLength: { 
      value: 3, 
      message: 'Must be at least 3 characters long',
    },
    maxLength: { 
      value: 5, 
      message: 'Must be 5 characters or fewer',
    },
    min: { 
      value: 1, 
      message: 'The minimum value is 1',
    },
    max: { 
      value: 90000, 
      message: 'The maximum value is 90000',
    },
  }
};

const Template: StoryFn<FieldValues> = () => {
  const { register, formState: { errors } } = useForm({ mode: 'all' });

  const formItems = [
    {
      name: 'input',
      label: 'Example 1',
      children: (
        <Input 
          placeholder={'Enter any text'}
          {...register('input', errorOptions['input'])} />
      ),
      isRequired: true,
      helper: 'there are required, pattern, min/max length and min/max validations',
    },
    // TODO select, checkbox, radio 등 추가
  ];

  return (
    <Form
      items={formItems}
      onSubmit={() => console.log('submit')}
      errors={errors} />
  );
};

export const Default = Template.bind({});