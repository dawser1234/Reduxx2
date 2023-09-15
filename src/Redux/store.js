import { createStore } from "redux";
import { TodoReducers } from "./Reducers/Reducers";

// Enable Redux DevTools extension if available
const reduxDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(TodoReducers, reduxDevToolsExtension);
