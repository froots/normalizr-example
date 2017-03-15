import React from 'react';

const Transaction = ({ transaction }) => (
  <li>
    <span>{transaction.dated_on}</span>
    <span>{transaction.name}</span>
    <span>{transaction.amount}</span>
  </li>
);

export default Transaction;
