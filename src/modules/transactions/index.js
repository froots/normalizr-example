import { ADD_ENTITIES } from '../../actions';

export const STATE_KEY = 'transactions';

export default function reducer(state = {}, action) {
  switch (action.type) {
    case ADD_ENTITIES:
      return {
        ...state,
        ...action.payload.transactions
      };
    default:
      return state;
  }
}
