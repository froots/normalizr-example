import React from 'react';
import Transaction from '../containers/Transaction';

const Statement = ({ statement, handleLoad }) => {
  if (!statement) {
    return (
      <div>
        <button onClick={handleLoad}>Load statement</button>
      </div>
    );
  }
  return (
    <div className="statement">
      <dl className="statement__details">
        <dt>Total entries:</dt>
        <dd>{statement.total_entries}</dd>
        <dt>Opening balance</dt>
        <dd>{statement.opening_balance}</dd>
      </dl>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Named</th>
            <th>Amount</th>
          </tr>
        </thead>
        {statement.transactions.map(transactionId => (
          <Transaction key={`transaction_${transactionId}`} transactionId={transactionId} />
        ))}
      </table>
    </div>
  );
};

export default Statement;
