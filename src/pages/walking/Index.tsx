import React, { FC, ReactElement } from 'react';
import './index.less';
const Index: FC = (): ReactElement => {
  return (
    <div className='man'>
      <span className='head'></span>
      <span className='body'></span>
      <span className='feet'></span>
    </div>
  );
};

export default Index;
