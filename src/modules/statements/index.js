import { ADD_ENTITIES } from '../../actions';
export { getStatement } from './actions';

export const STATE_KEY = 'statements';

export default function reducer(state = {}, action) {
  switch (action.type) {
    case ADD_ENTITIES:
      return {
        ...state,
        ...action.payload.statements
      };
    default:
      return state;
  }
}
