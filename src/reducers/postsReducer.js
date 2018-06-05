import { FETCH_POSTS, ADD_POST, GET_POST, DELETE_POST } from '../actions';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return action.payload.data.reduce((acc, item) => {
        acc[item.id] = item;
        return acc;
      }, {});
    case GET_POST:
      return { ...state, [action.payload.data.id]: action.payload.data };
    case ADD_POST:
      return { ...state, [action.payload.data.id]: action.payload.data };
    case DELETE_POST:
      // This commented is the correct syntax to immutably omit a key using variable key
      // BUT its not working cuz of issue with Babel plugin
      // actual code implemented is NOT immutable

      // let { [action.payload.data.id]: value, ...rest } = state;
      // return rest;
      
      const newState = {...state}
      delete newState[action.payload.data.id]
      return newState
    default:
      return state;
  }
}