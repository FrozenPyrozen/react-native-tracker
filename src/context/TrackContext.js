import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const trackReducer = (state, action) => {
  switch (action.type) {
    case 'fetch_tracks':
      return action.payload;
    default:
      return state;
  }
};

const fetchTracks = dispatch => async () => {
  try {
    const response = trackerApi.get('tracks');
    dispatch({ type: 'fetch_tracks', payload: response.data });
  } catch (error) {
    console.error(error);
  }
};
const createTrack = dispatch => async (name, locations) => {
  try {
    await trackerApi.post('/tracks', { name, locations });
  } catch (error) {
    console.error(error);
  }
};

export const { Provider, Context } = createDataContext(
  trackReducer,
  {
    fetchTracks,
    createTrack,
  },
  []
);
