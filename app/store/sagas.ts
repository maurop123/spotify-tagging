import { all } from 'redux-saga/effects';
import { watchSearch } from '../features/search/searchSaga';

export function* rootSaga() {
  yield all([watchSearch()]);
}
