import { normalize } from 'normalizr';
import { addEntities, updateCurrentStatement } from '../../actions';

export const getStatement = () => (dispatch, getState, { api, schema }) => {
  return api.fetchStatement()
    .then((response) => {
      const { entities, result } = normalize(response, schema.statement);
      dispatch(addEntities(entities));
      dispatch(updateCurrentStatement(result));
      return response;
    });
}
