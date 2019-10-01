import createDataContext from './createDataContext';
import trackerAPI from '../api/tracker';

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signup = dispatch => {
  return async ({ email, password }) => {
    //make api request to sign up that email and password
    // if we sign up, modify our state and say that we are authentificated
    //if signin up is fails, reflect error msg somewhere
    try {
      const response = await trackerAPI.post('/signup', { email, password });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
};

const signin = dispatch => {
  return ({ email, password }) => {
    // Try to signin
    // Handle success by updating state
    // Handle failure by showing eroor msg
  };
};

const signout = dispatch => {
  return () => {
    // sign out
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup },
  { isSignedIn: false }
);
