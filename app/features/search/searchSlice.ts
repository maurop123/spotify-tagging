import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface SearchState {
  data: any; //specify as needed
  loading: boolean;
  error: any;
}

const initialState: SearchState = {
  loading: false,
  data: null,
  error: null,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    fetchSpotifySearch: (state) => {
      console.debug('fetchSpotifySearch reducer');
      return state;
    },
    fetchSpotifySuccess: (state) => {
      console.debug('fetchSpotifySearch reducer');
      return state;
    },
    fetchSpotifyFailure: (state) => state,
  },
});

export const { fetchSpotifySearch, fetchSpotifySuccess, fetchSpotifyFailure } =
  searchSlice.actions;

export default searchSlice.reducer;
