import { combineReducers } from 'redux';
import statements from './statements';
import transactions from './transactions';

const bankingApp = combineReducers({
  statements,
  transactions,
});

export default bankingApp;
