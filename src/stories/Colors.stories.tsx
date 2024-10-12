import { ReactNode } from 'react';
import type { Meta } from '@storybook/react';
import { Colors } from 'tailwind.config';

const Title = ({ children }: { children: ReactNode }) => {
  return (
    <span className={'text-gray-600 font-semibold text-xl'}>{children}</span>
  );
};

const RowFlexBox = ({ children }: { children: ReactNode }) => {
  return (
    <div className={'flex flex-row items-center justify-start items-center gap-8'}>{children}</div>
  );
};

const Circle = ({ color, className }: { color: Colors, className?: string }) => {
  return (
    <div className={`w-20 h-20 rounded-full bg-${color} flex items-center justify-center text-white ${className}`}>{color}</div>
  );
};

const meta: Meta<typeof Circle> = {
  title: 'StyleGuide/Colors',
  component: Circle,
};

export default meta;

export const Default = () => {
  return (
    <div className={'flex flex-col gap-8'}>
      <Title>Main color</Title>
      <RowFlexBox>
        <Circle color={'main-light'} />
        <Circle color={'main'} />
        <Circle color={'main-dark'} />
      </RowFlexBox>

      <Title>Red</Title>
      <RowFlexBox>
        <Circle color={'red-light'} />
        <Circle color={'red'} />
        <Circle color={'red-dark'} />
      </RowFlexBox>

      <Title>Blue</Title>
      <RowFlexBox>
        <Circle color={'blue-light'} />
        <Circle color={'blue'} />
        <Circle color={'blue-dark'} />
      </RowFlexBox>

      <Title>White | Black</Title>
      <RowFlexBox>
        <Circle color={'white'} className={'text-gray-700 border border-gray-400'} />
        <Circle color={'black'} />
      </RowFlexBox>

      <Title>Gray scale</Title>
      <RowFlexBox>
        <Circle color={'gray-50'} className={'text-gray-700'} />
        <Circle color={'gray-100'} className={'text-gray-700'} />
        <Circle color={'gray-200'} className={'text-gray-700'} />
        <Circle color={'gray-300'} className={'text-gray-700'} />
        <Circle color={'gray-400'} className={'text-gray-700'} />
      </RowFlexBox>
      <RowFlexBox>
        <Circle color={'gray-500'} />
        <Circle color={'gray-600'} />
        <Circle color={'gray-700'} />
        <Circle color={'gray-800'} />
        <Circle color={'gray-900'} />
      </RowFlexBox>
      <RowFlexBox>
        <Circle color={'gray-950'} />
      </RowFlexBox>
    </div>
  );
};