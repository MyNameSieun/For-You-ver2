const SET_ACTIVETAB = 'activeTab/SET_ACTIVETAB';

export const setActiveTab = (payload) => {
  return { type: SET_ACTIVETAB, payload };
};
const initialState = '토토로';

const activeTab = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVETAB:
      const activeTab = action.payload;
      return activeTab;
    default:
      return state;
  }
};

export default activeTab;
