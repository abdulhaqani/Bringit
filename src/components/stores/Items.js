import React, { useContext } from 'react';
import StoreItem from './StoreItem';
import Spinner from '../layout/Spinner';
import StoreContext from '../../context/store/storeContext';

const Users = () => {
  const storeContext = useContext(StoreContext);
  const { loading, items } = StoreContext;

  if (loading) {
    return <Spinner></Spinner>;
  } else {
    return (
      <div style={itemStyle}>
        <StoreItem key="123" item="321"></StoreItem>
      </div>
    );
  }
};

const itemStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};

export default Users;
