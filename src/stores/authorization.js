import { defineStore } from 'pinia'
import axios from 'axios'

const generateRandomString = (length=6)=>Math.random().toString(20).substr(2, length)

export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      client_id: '9aacfebf84234f118ff3f7fa2e922b63',
      state: generateRandomString(16),
    }
  },
  getters: {
    getSpotifyAuthLink(state) {
      const params = {
        client_id: state.client_id,
        state: state.state,
        response_type: 'code',
        scope: 'user-read-private user-read-email',
        redirect_uri: 'http://localhost:5173/login-callback',
      }
      
      const uriComponent = Object.entries(params).reduce((res, [key, val]) => {
        return res + `${key}=${val}&`
      }, '')

      return 'https://accounts.spotify.com/authorize?' + uriComponent
    },
  },
})
