import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { statements as selectStatements } from './selectors';
import Statement from './components/Statement';
import { fetchStatement } from './actions/statement';
import './App.css';

const App = ({ statements, fetchStatement }) => {
  if (!statements || !statements.length) {
    return (
      <div>
        <button type="button" onClick={(ev) => { fetchStatement() }}>Load statement</button>
      </div>
    );
  }
  return (
    <div>
      {statements.map(statement => (
        <Statement statement={statement} key={`statement_${statement.id}`} />
      ))}
    </div>
  );
};

const mapStateToProps = ({ statements }) => {
  return {
    statements: selectStatements(statements) 
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchStatement }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
