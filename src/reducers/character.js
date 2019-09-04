/**
 * character.js
 * Root level state for character data only
 */

import {
  LOAD_CHARACTER_DATA,
  CLEAR_CHARACTER_DATA,
  LOAD_PETS,
  CLEAR_PETS,
  LOAD_SNACKS,
  CLEAR_SNACKS
} from '../constants/types';

const initialState = {
  data: null, // loaded directly from API, energy data found here too
  pets: [], // array of objects
  snacks: [], // array of objects
  loading: false // boolean
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    /**
     * @payload CharacterData object
     */
    case LOAD_CHARACTER_DATA:
      return { ...state, data: { ...state.data, ...payload } };
    case CLEAR_CHARACTER_DATA:
      return {
        data: null,
        pets: [],
        snacks: [],
        loading: false
      };
    case LOAD_PETS:
      return { ...state, pets: payload };
    case CLEAR_PETS:
      return { ...state, pets: [] };
    case LOAD_SNACKS:
      return { ...state, snacks: payload };
    case CLEAR_SNACKS:
      return { ...state, snacks: [] };
    default:
      return state;
  }
}