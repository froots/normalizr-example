const STATEMENT_URL = 'https://api.myjson.com/bins/cjkvt';

export function fetchStatement() {
  return fetch(STATEMENT_URL)
    .then(response => response.json())
    .then(json => Object.assign({}, {id: 1}, json));
}
