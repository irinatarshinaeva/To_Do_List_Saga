import { memo, useState } from 'react';
import { createTask } from '../../../contexts/actions/actions';
import { useDispatchContext } from '../../../contexts/store';

function Form() {
  const [value, setValue] = useState('');

  const dispatch = useDispatchContext();

  const changeHandler = ({ target: { value: inputValue } }) => {
    setValue(inputValue);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createTask(value));
    setValue('');
  };

  return (
    <div className="d-flex justify-content-center">
      <form onSubmit={submitHandler} className="d-flex flex-column">
        <div className="mb-3">
          <input
            type="text"
            value={value}
            placeholder="Task"
            onChange={changeHandler}
            className="form-control"
          />
        </div>

        <button type="submit" className="btn btn-danger">
          Submit
        </button>
      </form>
    </div>
  );
}

export default memo(Form);
