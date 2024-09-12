import { call, takeLatest, put } from 'redux-saga/effects';
import { fetchSpotifySearch, fetchSpotifySuccess } from './searchSlice';

const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;

export function* watchSearch() {
  yield takeLatest(fetchSpotifySearch.type, callSpotifySearch);
}

function* callSpotifySearch(payload) {
  console.debug('callSpotifySearch payload', payload);

  //get access token
  // const response = yield call(fetch, 'https://accounts.spotify.com/api/token', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/x-www-form-urlencoded',
  //     Authorization: `Basic ${Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`, 'utf8').toString('base64')}`,
  //   },
  // });
  const response = yield call(fetch, 'http://localhost:3001/api/cors');
  console.debug('access token response', response);
  yield put(fetchSpotifySuccess(response));
}
