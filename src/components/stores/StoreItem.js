import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const StoreItem = ({ item: { name, store, img_url, price } }) => {
  return (
    <div className="card text-center">
      <img
        src={img_url}
        alt=""
        className="round-img"
        style={{ width: '60px' }}
      />

      <h3>
        {name} from {store}
      </h3>

      <div>
        <Link to="/" className="btn btn-dark btn-sm my-1">
          more
        </Link>
      </div>
    </div>
  );
};

StoreItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default StoreItem;
