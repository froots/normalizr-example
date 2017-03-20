import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Statement from '../components/Statement';
import { getStatement } from '../actions';

const mapStateToProps = ({ currentStatement, statements }) => {
  return {
    statement: statements[currentStatement] || null // could be replaced by a selector
  };
};

const mapDispatchToProps = (dispatch) => ({
  handleLoad: bindActionCreators(getStatement, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Statement);
