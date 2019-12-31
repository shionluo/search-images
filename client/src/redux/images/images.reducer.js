// Import
import ImagesTypes from './images.types';

// ----------------------------------------------------------------------------------------- //

const {
  SHOW_IMAGES_LIST,
  SET_IMAGES_LIST,
  SET_IMAGES_LIST_STATUS,
} = ImagesTypes;

const initialState = {
  toggle: 'off',
  imagesList: [],
  status: false,
};

const imagesReducer = (state = initialState, { type, payload }) => {
  const reducer = {
    [SHOW_IMAGES_LIST]: {
      ...state,
      toggle: 'on',
    },
    [SET_IMAGES_LIST]: {
      ...state,
      imagesList: payload,
    },
    [SET_IMAGES_LIST_STATUS]: {
      ...state,
      status: payload,
    },
  };

  return reducer[type] || state;
};

export default imagesReducer;
