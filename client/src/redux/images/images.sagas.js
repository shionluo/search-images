// Import
import { takeLatest, put, all, call } from 'redux-saga/effects';
import axios from 'axios';

// Import - Types
import ImagesType from './images.types';

// Import - Actions
import { fetchImagesSuccess, fetchImagesFailure } from './images.actions';

// ----------------------------------------------------------------------------------------- //

const { FETCH_IMAGES_START } = ImagesType;

export function* fetchImagesStartAsync({ payload }) {
  try {
    const response = yield axios.post('/api', { searchInput: payload });
    yield put(fetchImagesSuccess(response));
  } catch (error) {
    yield put(fetchImagesFailure(error));
  }
}

export function* fetchImagesStart() {
  yield takeLatest(FETCH_IMAGES_START, fetchImagesStartAsync);
}

export function* imagesSaga() {
  yield all([call(fetchImagesStart)]);
}
