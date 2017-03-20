import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Transaction from '../components/Transaction';
import { updateCurrentTransaction } from '../actions';

const mapStateToProps = ({ transactions, currentTransaction }, { transactionId }) => {
  return {
    transaction: transactions[transactionId],
    selected: currentTransaction === transactionId
  };
}

const mapDispatchToProps = (dispatch) => ({
  handleToggle: bindActionCreators(updateCurrentTransaction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Transaction);
