import { ADD_ENTITIES } from '../actions';

export const STATE_KEY = 'explanations';

export default function reducer(state = {}, action) {
  switch (action.type) {
    case ADD_ENTITIES:
      return {
        ...state,
        ...action.payload.explanations
      };
    default:
      return state;
  }
}
