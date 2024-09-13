import { call, takeLatest, put } from 'redux-saga/effects';
import { fetchSpotifySearch, fetchSpotifySuccess } from './searchSlice';
import { redirect } from 'next/navigation';

const SPOTIFY_CLIENT_ID = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;

export function* watchSearch() {
  yield takeLatest(fetchSpotifySearch.type, callSpotifySearch);
}

function* callSpotifySearch(payload) {
  console.debug('callSpotifySearch payload', payload);

  const state = generateRandomString(16);

  const redirect_uri = 'http://localhost:3000/api/callback';

  window.location.href = `https://accounts.spotify.com/authorize?response_type=code&client_id=${SPOTIFY_CLIENT_ID}&&redirect_uri=${redirect_uri}`;
  //

  // const response = yield call(fetch, '/api/search');
  // console.debug(
  //   'access token response',
  //   response.json().then((x) => console.debug({ x }))
  // );
  // yield put(fetchSpotifySuccess(response));
}

function generateRandomString(length) {
  const chars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}
