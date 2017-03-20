import { normalize } from 'normalizr';

import { ADD_ENTITIES, addEntities, updateCurrentStatement } from '../actions';
// import { statement } from '../api/schema';

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

export const getStatement = () => (dispatch, getState, { api, schema }) => {
  return api.fetchStatement()
    .then((response) => {
      const { entities, result } = normalize(response, schema.statement);
      dispatch(addEntities(entities));
      dispatch(updateCurrentStatement(result));
      return response;
    });
}
