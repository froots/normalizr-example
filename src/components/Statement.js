import React from 'react';
import Transactions from '../containers/Transactions';

const Statement = ({ statement }) => {
  if (!statement || statement.total_entries) {
    return null;
  }
  return (
    <div className="statement">
      <dl className="statement__details">
        <dt>Total entries:</dt>
        <dd>{statement.total_entries}</dd>
        <dt>Opening balance</dt>
        <dd>{statement.opening_balance}</dd>
      </dl>
      <Transactions transactions={statement.transactions} />
    </div>
  );
};

export default Statement;
