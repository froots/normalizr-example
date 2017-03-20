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
  console.log('Current state in action:', getState());
  return api.fetchStatement()
    .then((response) => {
      console.log('Response:', response);
      const { entities, result } = normalize(response, schema.statement);
      console.log('Normalized:', entities, result);
      dispatch(addEntities(entities));
      dispatch(updateCurrentStatement(result));
      return response;
    });
}
