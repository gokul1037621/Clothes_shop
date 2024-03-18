//Type Of Action

export const SIGNUP_USER = "SIGNUP_USER";
export const SIGNIN_USER = "SIGNIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";

//Action

export const signupUser = (signupData) => ({
  type: SIGNUP_USER, //mandate
  payload: signupData, //Optional
});

export const signinUser = (signinData) => ({
  type: SIGNIN_USER, //mandate
  payload: signinData, //Optional
});

export const logOutUser = (logoutData) => ({
  type: LOGOUT_USER, //mandate
  payload: logoutData, //Optional
});
