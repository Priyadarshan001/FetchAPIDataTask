import { configureStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import ShopApp from "../reducers/index";
const store = configureStore(ShopApp, applyMiddleware(thunkMiddleware));
export default store;
