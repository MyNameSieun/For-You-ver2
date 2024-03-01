import letters from 'store/modules/letterSlice';
import activeTab from 'store/modules/activeTabSlice';

import { combineReducers, configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({ letters, activeTab });

const store = configureStore({ reducer: rootReducer });

export default store;
