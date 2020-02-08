import React, { useReducer } from 'react';
import StoreContext from './storeContext';
import StoreReducer from './storeReducer';

import { SEARCH_ITEMS, SET_LOADING, CLEAR_ITEMS } from '../types';

const StoreState = props => {
  const initialState = {
    items: [],
    item: {},
    loading: false
  };

  const [state, dispatch] = useReducer(StoreReducer, initialState);

  // Search github users
  const searchItems = async text => {
    setLoading();

    dispatch({ type: SEARCH_ITEMS });
  };

  // get user

  // clear users from state
  const clearItems = () => dispatch({ type: CLEAR_ITEMS });

  // set loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <StoreContext.Provider
      value={{
        items: state.stores,
        item: state.store,
        loading: state.loading,
        searchItems,
        clearItems
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreState;
