import React, { FC, ReactElement } from 'react';
import { useState, useEffect } from 'react';
import { Button } from 'antd';
import './index.less';

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
    </div>
  );
};

export default Index;
