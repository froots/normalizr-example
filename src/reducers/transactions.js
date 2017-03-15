import { ADD_ENTITIES } from '../actions';

export default function transactions(state = {}, { type, payload }) {
  switch(type) {
    case ADD_ENTITIES:
      return {
        ...state,
        ...payload.transactions
      };
    default:
      return state;
  }
};
