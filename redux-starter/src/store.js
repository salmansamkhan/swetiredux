import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";
import logger from "./middleware/logger";

// Middleware and store enhancers
const enhancers = [];

// if (process.env.NODE_ENV !== "production") {
// enhancers.push(applyMiddleware(createLogger()))
window.__REDUX_DEVTOOLS_EXTENSION__ &&
  enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__({ trace: true }));
// }
// enhancers.push(applyMiddleware(logger()));

const store = createStore(reducer, compose(...enhancers));

export default store;
