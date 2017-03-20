import { connect } from 'react-redux';

import Explanation from '../components/Explanation';

const mapStateToProps = ({ explanations }, { explanationId }) => ({
  explanation: explanations[explanationId]
});

export default connect(mapStateToProps)(Explanation);
