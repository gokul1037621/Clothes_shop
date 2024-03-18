import { SIGNUP_USER, SIGNIN_USER, LOGOUT_USER } from "./signupAction";

// initial state
const initialUserState = {
  users: [],
  current_user: null,
};
export const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case SIGNUP_USER:
      return {
        ...state,
        current_user: action.payload, // updating state
        // users : [...users, action.payload]
      };
    case SIGNIN_USER:
      return {
        ...state,
        current_user: action.payload, // updating state
      };
    case LOGOUT_USER:
      return {
        ...state,
        current_user: null, // updating state
      };
    default:
      return state;
  }
};

// const rememberCheck = (state=initialUserState) =>{
//     return {
//         ...state,
//         monsters:[1,2,3,4,5]
//     }
// }

// console.log(rememberCheck())
