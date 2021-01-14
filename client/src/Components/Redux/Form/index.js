import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as AC from '../../../redux/actions/actions';

function Form() {
  const [value, setValue] = useState('');

  const dispatch = useDispatch();

  const changeHandler = ({ target: { value: inputValue } }) => {
    setValue(inputValue);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(AC.createTaskThunk(value));
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

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
