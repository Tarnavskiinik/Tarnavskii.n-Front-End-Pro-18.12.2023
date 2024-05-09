import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: '',
}

export const emailSenderSlice = createSlice({
  name: 'email',
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload
    },
  },
})

export const { setEmail } = emailSenderSlice.actions

export default emailSenderSlice.reducer