import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authSlice",
  initialState: { isLogin: !!localStorage.getItem("accessToken"), userId: "" },
  reducers: {
    setLogin: (state, action) => {
      state.isLogin = true;
      state.userId = action.payload;
    },
    setLogout: (state) => {
      state.isLogin = false;
      localStorage.clear();
    },
  },
});

export const { setLogin, setLogout } = authSlice.actions;
export default authSlice.reducer;
