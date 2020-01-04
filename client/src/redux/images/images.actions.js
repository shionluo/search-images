// Import
import axios from 'axios';

// Import - Types
import ImagesTypes from './images.types';

// ----------------------------------------------------------------------------------------- //

const {
  FETCH_IMAGES_START,
  FETCH_IMAGES_SUCCESS,
  FETCH_IMAGES_FAILURE,
} = ImagesTypes;

export const fetchImages = searchInput => async dispatch => {
  dispatch({ type: FETCH_IMAGES_START });

  try {
    const response = await axios.post('/api', { searchInput });
    dispatch({ type: FETCH_IMAGES_SUCCESS, payload: response.data.results });
  } catch (error) {
    dispatch({ type: FETCH_IMAGES_FAILURE, payload: error.message });
  }
};
