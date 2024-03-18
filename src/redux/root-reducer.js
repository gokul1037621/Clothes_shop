import { combineReducers } from "redux";
import cartReducer from "./cart/cart.reducer";
import collectionReducer from "./collections/collection.reducer";
import directoryReducer from "./directory/directory.reducer";
import { userReducer } from "./user/signupReducer";

const rootReducer = combineReducers({
  directory: directoryReducer,
  collection: collectionReducer,
  cart: cartReducer,
  user: userReducer,
});

export default rootReducer;
