
export const updateObjectProperty = (state, id, updatedProperties) => {
  return {
      // We need to keep all state entities here
      ...state,
      [id]: {
        // and update only one defined in action
        // so that we merge current state
        ...state[id],
        // with modified attributes
        ...updatedProperties
      }
    };
}

/**
 * Sort human entities by size
 * @returns array of IDs
 */
export const sortHumans = (entities) => {
  // TODO_BONUS: sort entities - this function should return only IDs - not whole entities!
  return [];
}