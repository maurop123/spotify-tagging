import { NextResponse } from 'next/server';

const SPOTIFY_CLIENT_ID = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;

export async function GET(request) {
  console.debug('request', request);
  const params = request.url
    .split('?')[1]
    .split('&')
    .reduce((acc, split) => {
      const [key, val] = split.split('=');
      return { ...acc, [key]: val };
    }, {});
  console.debug('debug params', params);

  console.debug({ SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET });
  const body = JSON.stringify({
    code: params.code,
    redirect_uri: 'http://localhost:3000/api/callback',
    grant_type: 'authorization_code',
  });
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: `Basic ${new Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64')}`,
  };
  console.debug('body', body);
  console.debug('headers', headers);
  const resp = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers,
    body,
  });
  console.debug('resp', resp);
  return NextResponse.json(resp);
}
