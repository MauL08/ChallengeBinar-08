import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setLoading } from '../slices/globalSlice';

export const getPokedex = createAsyncThunk(
  'pokemon/pokedex',
  async (page, { dispatch, rejectWithValue }) => {
    try {
      dispatch(setLoading(true));
      if (page) {
        const response = await axios.get(page);
        return response.data;
      } else {
        const response = await axios.get(
          'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20',
        );
        return response.data;
      }
    } catch (error) {
      return rejectWithValue(error.response.data);
    } finally {
      dispatch(setLoading(false));
    }
  },
);

export const getPokemon = createAsyncThunk(
  'pokemon/pokemonDetail',
  async (pokeName, { rejectWithValue, dispatch }) => {
    try {
      dispatch(setLoading(true));
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokeName}`,
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    } finally {
      dispatch(setLoading(false));
    }
  },
);

const initialState = {
  pokemonData: {},
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  extraReducers: {
    [getPokedex.fulfilled]: (state, action) => {
      return {
        ...state,
        pokemonData: action.payload,
      };
    },
    [getPokemon.fulfilled]: (state, action) => {
      return {
        ...state,
        pokemonData: action.payload,
      };
    },
  },
});

export default pokemonSlice.reducer;
