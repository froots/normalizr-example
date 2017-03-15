import { normalize } from 'normalizr';
import { addEntities } from '../actions';

export const FETCHING_STATEMENT = 'FETCHING_STATEMENT';

export function fetchStatement() {
  return (dispatch, getState, { api, schema }) => {
    dispatch(fetchingStatement());
    return api.getStatement()
      .then((response) => {
        const data = normalize(response, schema.statement);
        console.log('normalize output: ', JSON.stringify(data, null, 2));
        dispatch(addEntities(data.entities));
        return response;
      })
      .catch(error => console.log(error));
  };
}

function fetchingStatement() {
  return {
    type: FETCHING_STATEMENT,
    payload: {}
  };
}
