import { call, takeLatest, put } from 'redux-saga/effects';
import { fetchSpotifySearch } from './searchSlice';

const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;

export function* watchSearch() {
  yield takeLatest(fetchSpotifySearch, callSpotifySearch);
}

function* callSpotifySearch(payload) {
  console.debug('callSpotifySearch payload', payload);
  try {
    //get access token
    const response = yield call(
      fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          grant_type: 'client_credentials',
          client_id: SPOTIFY_CLIENT_ID,
          client_secret: SPOTIFY_CLIENT_SECRET,
        }),
      })
    );
    console.debug('access token response', response);
  } catch {}
}
