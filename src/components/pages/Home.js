import React, { Fragment } from 'react';
import Search from '../users/Search';
import Users from '../users/Users';

export const Home = () => {
  return (
    <Fragment>
      <h3 className="text-center">What would you like to purchase today?</h3>
      <Search></Search>
      <Users></Users>
    </Fragment>
  );
};

export default Home;
