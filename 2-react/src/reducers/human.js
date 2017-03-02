import {combineReducers} from 'redux';
import {updateObjectProperty} from './index';

const defaultHumansState = {
    1: {
      id: 1,
      photo: './images/human1.jpg',
      border: '#27ae60',
      size: 30
    },
    2: {
      id: 2,
      photo: './images/human2.png',
      border: '#2980b9',
      size: 20
    },
    3: {
      id: 3,
      photo: './images/human3.png',
      border: '#16a085',
      size: 10
    }
};

// Predefined human entities
function entities (state = defaultHumansState, action) {
  switch (action.type) {
  case 'SET_HUMAN_BORDER':
    return updateObjectProperty(state, action.id, {
      border: action.border
    });
  // TODO: decrease human size reduce
  // TODO: increase human size reduce
  // TODO: new human size reduce
  default:
    return state;
  }
}

// Predefined listing of human IDs
function listing (state = [1, 2, 3], action) {
  // TODO: new human size reduce
  return state;
}

// Listing of human IDs sorted by size
function sorted (state = [], action) {
  // TODO_BONUS: catch action which should store new sorted listing
  return state;
}

export default combineReducers ({
  entities,
  listing,
  sorted
});
