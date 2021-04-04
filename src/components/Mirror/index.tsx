import React from 'react';

import { useCount } from '../../contexts/CountContext';

const Mirror: React.FC = () => {
  const { count } = useCount();

  return (
    <span>
      <b>Mirror: </b>
      {count}
    </span>
  );
};

export default Mirror;
