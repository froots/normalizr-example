import React from 'react';
import './Transaction.css';

import Explanation from '../containers/Explanation.js';

const Transaction = ({ transaction, transactionId, selected, handleToggle }) => {
  return (
    <tbody className="Transaction">
      <tr onClick={() => handleToggle(transactionId)}>
        <td>{transaction.dated_on}</td>
        <td>{transaction.name}</td>
        <td>{transaction.amount}</td>
      </tr>
      {selected && transaction.explanations.length === 0 && (
        <tr>
          <td colSpan="3">There are no explanations</td>
        </tr>
      )}
      {selected &&
        transaction.explanations.length > 0 &&
        transaction.explanations.map(explanationId => (
          <Explanation
            key={`explanation_${explanationId}`}
            explanationId={explanationId}
          />
        ))
      }
    </tbody>
  );
};

export default Transaction;
