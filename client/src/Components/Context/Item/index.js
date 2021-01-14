import { changeStatus, deleteTask } from '../../../contexts/actions/actions';
import { useDispatchContext } from '../../../contexts/store';

function Item({ index, text, _id, status }) {
  const dispatch = useDispatchContext();

  const statusHandler = () => {
    dispatch(changeStatus(_id));
  };

  const deleteHandler = () => {
    dispatch(deleteTask(_id));
  };

  return (
    <li className="list-group-item d-flex justify-content-between">
      <span
        className={`d-flex align-items-center tasksText ${status && 'done'}`}
      >
        {index + 1}.&nbsp;{text}
      </span>
      <span className="d-flex">
        <button
          onClick={statusHandler}
          type="button"
          className={`btn btn-${status ? 'dark' : 'success'} mx-1`}
        >
          {status ? 'UnDone' : 'Done'}
        </button>
        <button
          onClick={deleteHandler}
          type="button"
          className="btn btn-danger mx-1"
        >
          Delete
        </button>
      </span>
    </li>
  );
}

export default Item;
