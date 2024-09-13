import { NextResponse } from 'next/server';

const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;

export async function GET(request: Request) {
  //get access token
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64')}`,
    },
    body: {
      grant_type: 'client_credentials',
    },
  });
  console.debug(response.status, response);
  return NextResponse.json({ response });
}

export async function POST(request: Request) {
  const data = await request.json();
  return NextResponse.json({ received: data });
}
