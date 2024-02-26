import { createStore, combineReducers } from 'redux';
import letters from 'store/modules/letters';
import activeTab from 'store/modules/activeTab';

const rootReducer = combineReducers({ letters, activeTab });
const store = createStore(rootReducer);

export default store;
