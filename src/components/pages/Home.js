import React, { Fragment } from 'react';
import Search from '../stores/Search';
import Items from '../stores/Items';

export const Home = () => {
  return (
    <Fragment>
      <Search></Search>
      <Items></Items>
    </Fragment>
  );
};

export default Home;
