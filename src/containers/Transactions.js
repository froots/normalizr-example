import { connect } from 'react-redux';
import Transactions from '../components/Transactions';

const mapStateToProps = ({ transactions }) => {
  return { transactions }
};

export default connect(mapStateToProps)(Transactions);
