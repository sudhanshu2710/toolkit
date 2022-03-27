import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware } from "redux";
import authReducer from "./auth";
import counterReducer from "./counter";

// const logger = (state) => (next) => (action) => {
//   console.log("middilware working....");
//   return next(action);
// };
const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer }, //---- note : its authSlice.reducer  not authSlice,reducres
});
//-------------------how to configure? counterSlice.actions.toggleCounter() returns and action object of the shape
//------------------ {type : 'some random unique identifire'} so our problem is solved we dont need to create manually.

export default store;
