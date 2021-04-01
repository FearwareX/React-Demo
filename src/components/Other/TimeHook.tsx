import React, { FC, ReactElement, useEffect, useState } from 'react';

const TimeHook: FC = (): ReactElement => {
  const [Time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return <div>{Time.toLocaleTimeString()}</div>;
};

export default TimeHook;
