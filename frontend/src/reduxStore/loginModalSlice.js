import { createSlice } from "@reduxjs/toolkit";

const initialState = {   // create initial State
  isLoginOpen: false,
};
 
const loginModalSlice = createSlice({   // create the name for the state
  name: "loginModal",
  initialState,

  reducers: {
    openLogin: (state) => {
      state.isLoginOpen = true;
    },

    closeLogin: (state) => {
      state.isLoginOpen = false;
    },
  },
});

export const { openLogin, closeLogin } = loginModalSlice.actions;

export default loginModalSlice.reducer;