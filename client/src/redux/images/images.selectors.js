// Import
import { createSelector } from 'reselect';

// ----------------------------------------------------------------------------------------- //

const selectImages = state => state.images;

export const selectImagesToggle = createSelector(
  [selectImages],
  images => images.toggle,
);

export const selectImagesList = createSelector(
  [selectImages],
  images => images.imagesList,
);

export const selectImagesStatus = createSelector(
  [selectImages],
  images => images.status,
);
