import React, { FC, ReactElement } from 'react';
import './index.less';

interface Props {}

const Header: FC<Props> = (): ReactElement => {
  return (
    <header className='Header'>
      <h1>HelloWorld</h1>
      <span className='icon'>&#43;</span>
    </header>
  );
};

export default Header;
