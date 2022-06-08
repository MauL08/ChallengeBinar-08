import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getPokedex = () => {};

export const getPokemon = () => {};

export const getPokebag = () => {};

const initialState = {};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  extraReducers: {},
});

export default pokemonSlice.reducer;
