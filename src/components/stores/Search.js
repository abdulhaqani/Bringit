import React, { useState, useContext } from 'react';
import StoreContext from '../../context/store/storeContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  const storeContext = useContext(StoreContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      alertContext.setAlert('Please enter Something', 'grey');
    } else {
      //StoreContext.searchUsers(text);
      setText('');
    }
  };

  const onChange = e => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search Users"
          value={text}
          //onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {storeContext.users.length > 0 && (
        <button
          className="btn btn-light btn-block"
          //onClick={storeContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
