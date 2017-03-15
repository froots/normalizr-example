const STATEMENT_URL = 'https://api.myjson.com/bins/185mvj';

export function getStatement() {
  return fetch(STATEMENT_URL)
    .then(response => response.json());
}
