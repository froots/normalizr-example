export const ADD_ENTITIES = 'ADD_ENTITIES';

export function addEntities(entities) {
  return {
    type: ADD_ENTITIES,
    payload: entities
  };
}
