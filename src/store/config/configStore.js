import letters from 'store/modules/letterSlice';
import activeTab from 'store/modules/activeTabSlice';
import auth from 'store/modules/authSlice';

import { combineReducers, configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({ letters, activeTab, auth });

const store = configureStore({ reducer: rootReducer });

export default store;
