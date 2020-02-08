import React from 'react';
import PropTypes from 'prop-types';

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt=""
        className="mx-auto"
        style={{ width: '80%' }}
      />

      <h3>{login}</h3>

      <div>
        <button type="submit" name="addToCart" className="btn btn-success">
          Add to cart
        </button>

        <h5 className="text-center">Price!!!</h5>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
