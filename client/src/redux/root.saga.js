// Import
import { all, call } from 'redux-saga/effects';

// Import - Sagas
import { imagesSaga } from 'redux/images/images.sagas';

// ----------------------------------------------------------------------------------------- //

export default function* rootSaga() {
  yield all([call(imagesSaga)]);
}
