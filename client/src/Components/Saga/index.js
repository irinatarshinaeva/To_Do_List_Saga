import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllTasksSaga } from '../../redux/actions/actions';
import Form from './Form';
import List from './List';

function Saga() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTasksSaga());
  }, []);

  return (
    <div className="mt-5">
      <Form />
      <hr />
      <List />
    </div>
  );
}

export default Saga;
