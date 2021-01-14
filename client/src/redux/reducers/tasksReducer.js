import * as TYPES from '../types/types';

const tasksReducer = (state = [], action) => {
  switch (action.type) {
    case TYPES.ADD:
      return [...state, action.payload];

    case TYPES.ADD_ALL:
      return action.payload;

    case TYPES.EDIT:
      return state.map((el) => {
        if (el._id === action.payload.id) {
          return {
            ...el,
            text: action.payload.text,
          };
        }
        return el;
      });

    case TYPES.STATUS:
      return state.map((el) => {
        if (el._id === action.payload) {
          return {
            ...el,
            status: !el.status,
          };
        }
        return el;
      });

    case TYPES.DELETE:
      return state.filter((el) => el._id !== action.payload);

    default:
      return state;
  }
};

export default tasksReducer;
