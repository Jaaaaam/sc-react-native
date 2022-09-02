import { createSlice } from '@reduxjs/toolkit'

export const auth = createSlice({
  name: 'auth',
  initialState: {
    account: {},
    token: ''
  },
  reducers: {
    setAccount: (state, action) => {
      state.account = action.payload
    },
    setToken: (state, action) => {
      state.token = action.payload
    },
  }
})

export const { setAccount, setToken } = auth.actions

export default auth.reducer