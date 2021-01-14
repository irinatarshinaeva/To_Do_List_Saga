import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllTasks } from '../../redux/actions/actions';
import Form from './Form';
import List from './List';

function Redux() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTasks());
  }, []);

  return (
    <div className="mt-5">
      <Form />
      <hr />
      <List />
    </div>
  );
}

export default Redux;
