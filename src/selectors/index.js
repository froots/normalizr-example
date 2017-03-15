import { denormalize } from 'normalizr';
import * as schema from '../api/schema';

export function statements(statements) {
  
  console.log('current statements', statements);
  if (!Object.keys(statements).length) {
    return null;
  }
  const data = denormalize(1, schema.statement, statements);
  console.log(data);
  return data;
}
