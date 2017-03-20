import { schema } from 'normalizr';

export const explanation = new schema.Entity('explanations');

export const transaction = new schema.Entity('transactions', {
  'explanations': [ explanation ]
}, {
  // We're adding a process strategy to rename 'bank_account_entries' to
  // 'exlanations'. This is reflected in the schema, as the processing
  // happens before the normalization
  processStrategy: (value, parent, key) => {
    const newValue = Object.assign({}, value, {
      explanations: value.bank_account_entries
    });
    delete newValue.bank_account_entries;
    return newValue;
  }
});

export const statement = new schema.Entity('statements', {
  transactions: [ transaction ]
});
