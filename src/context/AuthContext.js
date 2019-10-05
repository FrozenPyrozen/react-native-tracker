import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerAPI from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'signup':
      return { ...state, errorMessage: '', token: action.payload };
    case 'signin':
      return { ...state, errorMessage: '', token: action.payload };
    case 'clear_error_message':
      return { ...state, errorMessage: '' };
    case 'signout':
      return { token: null, errorMessage: '' };
    default:
      return state;
  }
};

const tryLocalSignIn = dispatch => async () => {
  const token = await AsyncStorage.getItem('token');

  if (token) {
    dispatch({ type: 'signin', payload: token });
    return navigate('TrackList');
  }
  navigate('loginFlow');
};

const clearErrorMessage = dispatch => () => {
  dispatch({ type: 'clear_error_message' });
};

const signup = dispatch => async ({ email, password }) => {
  //make api request to sign up that email and password
  // if we sign up, modify our state and say that we are authentificated
  //if signin up is fails, reflect error msg somewhere
  try {
    const response = await trackerAPI.post('/signup', { email, password });

    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'signup', payload: response.data.token });

    navigate('TrackList');
  } catch (error) {
    alert('Something went wrong with sign up');
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong with sign up',
    });
  }
};

const signin = dispatch => async ({ email, password }) => {
  // Try to signin
  // Handle success by updating state
  // Handle failure by showing eroor msg
  try {
    const response = await trackerAPI.post('/signin', { email, password });
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'signin', payload: response.data.token });

    navigate('TrackList');
  } catch (error) {
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong with sign in',
    });
  }
};

const signout = dispatch => async () => {
  await AsyncStorage.removeItem('token');
  dispatch({ type: 'signout' });
  navigate('loginFlow');
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup, clearErrorMessage, tryLocalSignIn },
  { token: null, errorMessage: '' }
);
