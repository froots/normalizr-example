import { connect } from 'react-redux';

import Transaction from '../components/Transaction';

const mapStateToProps = ({ transactions }, { transactionId }) => {
  console.log('Mapping ', transactions, transactionId);
  return {
    transaction: transactions[transactionId]
  };
}

export default connect(mapStateToProps)(Transaction);
