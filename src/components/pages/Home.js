import React, { Fragment } from 'react';
import Search from '../users/Search';
import Users from '../users/Users';

export const Home = () => {
  return (
    <Fragment>
      <div className="container jumbotron">
        <h3 className="text-center" style={{ margin: '30px' }}>
          What would you like to purchase today?
        </h3>
        <Search></Search>
      </div>

      <Users></Users>
    </Fragment>
  );
};

export default Home;
