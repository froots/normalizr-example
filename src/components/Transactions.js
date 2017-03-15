import React from 'react';
import Transaction from './Transaction.js';

const Transactions = ({ transactions }) => (
  <ul>
    {transactions.map(transaction => (
      <Transaction transaction={transaction} />
    ))}
  </ul>
);

export default Transactions;
