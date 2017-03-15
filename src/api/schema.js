import { schema } from 'normalizr';

export const explanation = new schema.Entity('explanations');

export const transaction = new schema.Entity('transactions', {
  bank_account_entries: [ explanation ] 
})

export const statement = new schema.Entity('statements', {
  transactions: [ transaction ]
});
