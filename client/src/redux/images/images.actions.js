// Import
import ImagesTypes from './images.types';

// ----------------------------------------------------------------------------------------- //

const {
  SHOW_IMAGES_LIST,
  SET_IMAGES_LIST,
  SET_IMAGES_LIST_STATUS,
} = ImagesTypes;

export const showImagesList = () => ({
  type: SHOW_IMAGES_LIST,
});

export const setImagesList = items => ({
  type: SET_IMAGES_LIST,
  payload: items,
});

export const setImagesListStatus = status => ({
  type: SET_IMAGES_LIST_STATUS,
  payload: status,
});
