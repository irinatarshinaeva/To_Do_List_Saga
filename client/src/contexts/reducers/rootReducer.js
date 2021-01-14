import tasksReducer from './tasksReducer';

const combineReducers = (slices) => {
  return (state, action) => {
    return Object.keys(slices).reduce((acc, key) => {
      return {
        ...acc,
        [key]: slices[key](acc[key], action),
      };
    }, state);
  };
};

const rootReducer = combineReducers({
  tasks: tasksReducer,
});

export default rootReducer;
