import { ADD_ENTITIES } from '../actions';

export default function statements(state = {}, { type, payload }) {
  switch(type) {
    case ADD_ENTITIES:
      return {
        ...state,
        ...payload.statements
      };
    default:
      return state;
  }
};
