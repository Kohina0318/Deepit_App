import { createReducer } from '@reduxjs/toolkit'

const initialState = {
  mode: 'light',
  userData:{},
  
};

const RootReducer = createReducer(initialState, (builder) => {
  builder.addCase('THEME_CHANGE', (state, action) => {
 
    state.mode = action.payload;
  })
  builder.addCase('ADD_USER_DATA', (state, action) => {
    state.userData={};
    state.userData[action.payload[0]] = action.payload[1];
   
  })
  builder.addCase('REMOVE_ADD_USER_DATA', (state, action) => {
    state.userData = new Object();
  })
 
});
export default RootReducer;