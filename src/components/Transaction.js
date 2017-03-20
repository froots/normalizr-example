import React from 'react';

const Transaction = ({ transaction }) => {
  console.log(transaction);
  return (
    <tbody>
      <tr>
        <td>{transaction.dated_on}</td>
        <td>{transaction.name}</td>
        <td>{transaction.amount}</td>
      </tr>
    </tbody>
  );
};

export default Transaction;
