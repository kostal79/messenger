import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AudioSliceType } from "../../types/types";

const initialState: AudioSliceType = {
  canPlay: null,
};

export const audioSlice = createSlice({
  name: "audio",
  initialState,
  reducers: {
    setCanPlay: (state, action: PayloadAction<AudioSliceType["canPlay"]>) => {
      state.canPlay = action.payload;
    },
  },
});

export const { setCanPlay } = audioSlice.actions;

export default audioSlice.reducer;
