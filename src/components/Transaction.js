import React from 'react';

const Transaction = ({ transaction, transactionId, selected, handleToggle }) => {
  return (
    <tbody>
      <tr onClick={() => handleToggle(transactionId)}>
        <td>{transaction.dated_on}</td>
        <td>{transaction.name}</td>
        <td>{transaction.amount}</td>
      </tr>
      {selected && (
        <tr>
          <td colSpan="3">I am currently the selected transaction</td>
        </tr>
      )}
    </tbody>
  );
};

export default Transaction;
