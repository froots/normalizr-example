export { getStatement } from './modules/statements';

export const ADD_ENTITIES = 'normalizr-example/ADD_ENTITIES';
export const UPDATE_CURRENT_STATEMENT = 'normalizr-example/UPDATE_CURRENT_STATEMENT';
export const UPDATE_CURRENT_TRANSACTION = 'normalizr-example/UPDATE_CURRENT_TRANSACTION';

export const addEntities = (entities) => ({
  type: ADD_ENTITIES,
  payload: entities
});

export const updateCurrentStatement = (id) => ({
  type: UPDATE_CURRENT_STATEMENT,
  payload: id
});

export const updateCurrentTransaction = (transactionId) => ({
  type: UPDATE_CURRENT_TRANSACTION,
  payload: transactionId
});
