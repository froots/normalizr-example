import { combineReducers } from 'redux';

import statements, { STATE_KEY as STATEMENTS_STATE_KEY } from './modules/statements';
import transactions, { STATE_KEY as TRANSACTIONS_STATE_KEY } from './modules/transactions';
import explanations, { STATE_KEY as EXPLANATIONS_STATE_KEY } from './modules/explanations';

import {
  UPDATE_CURRENT_STATEMENT,
  UPDATE_CURRENT_TRANSACTION
} from './actions';

const reducer = combineReducers({
  currentStatement,
  currentTransaction,
  [STATEMENTS_STATE_KEY]: statements,
  [TRANSACTIONS_STATE_KEY]: transactions,
  [EXPLANATIONS_STATE_KEY]: explanations,
});

function currentStatement(state = null, action) {
  switch (action.type) {
    case UPDATE_CURRENT_STATEMENT:
      return action.payload;
    default:
      return state;
  }
}

function currentTransaction(state = null, action) {
  switch(action.type) {
    case UPDATE_CURRENT_TRANSACTION:
      return action.payload;
    default:
      return state;
  }
}

export default reducer;
