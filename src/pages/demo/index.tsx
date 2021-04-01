import React, { FC, ReactElement } from 'react';
import { useState, useEffect } from 'react';
import { Button } from 'antd';
import './index.less';
import Time from '@/components/Other/Time';

const Index: FC = (): ReactElement => {
  const [name, setName] = useState('HelloWorld');
  const changeName = () => {
    setName('Name has been changed!');
  };
  useEffect(() => {
    document.title = 'Hello React Hooks';
  });

  return (
    <div className='page'>
      <h2>{name}</h2>
      <Button type='primary' onClick={changeName}>
        {name}
      </Button>
      <Time />
    </div>
  );
};

export default Index;
