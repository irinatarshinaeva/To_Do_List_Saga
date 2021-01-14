import { createContext, useReducer, useContext } from 'react';
import rootReducer from './reducers/rootReducer';

const storeContext = createContext();
const dispatchContext = createContext();

const initState = {
  tasks: [],
};

function Wrapper({ children }) {
  const [state, dispatch] = useReducer(rootReducer, initState);

  return (
    <storeContext.Provider value={state}>
      <dispatchContext.Provider value={dispatch}>
        {children}
      </dispatchContext.Provider>
    </storeContext.Provider>
  );
}

export const useSelectorContext = () => {
  return useContext(storeContext);
};

export const useDispatchContext = () => {
  return useContext(dispatchContext);
};

export default Wrapper;
