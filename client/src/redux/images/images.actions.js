// Import
import ImagesTypes from './images.types';

// ----------------------------------------------------------------------------------------- //

const {
  FETCH_IMAGES_START,
  FETCH_IMAGES_SUCCESS,
  FETCH_IMAGES_FAILURE,
} = ImagesTypes;

export const fetchImagesStart = searchInput => ({
  type: FETCH_IMAGES_START,
  payload: searchInput,
});

export const fetchImagesSuccess = response => ({
  type: FETCH_IMAGES_SUCCESS,
  payload: response.data.results,
});

export const fetchImagesFailure = error => ({
  type: FETCH_IMAGES_FAILURE,
  payload: error.message,
});
