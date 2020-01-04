// Import
import ImagesTypes from './images.types';

// ----------------------------------------------------------------------------------------- //

const {
  FETCH_IMAGES_START,
  FETCH_IMAGES_SUCCESS,
  FETCH_IMAGES_FAILURE,
} = ImagesTypes;

const initialState = {
  toggle: 'off',
  status: false,
  imagesList: [],
  error: '',
};

const imagesReducer = (state = initialState, { type, payload }) => {
  const reducer = {
    [FETCH_IMAGES_START]: {
      ...state,
      toggle: 'on',
      status: false,
      imagesList: [],
      error: '',
    },
    [FETCH_IMAGES_SUCCESS]: {
      ...state,
      status: true,
      imagesList: payload,
    },
    [FETCH_IMAGES_FAILURE]: {
      ...state,
      status: true,
      error: payload,
    },
  };

  return reducer[type] || state;
};

export default imagesReducer;
