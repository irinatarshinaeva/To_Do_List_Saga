import { put, takeEvery, call } from 'redux-saga/effects';
import { createTask } from '../actions/actions';
import { ADD_TASK_SAGA } from '../types/types';

function createTaskFetch(text) {
  return fetch(`${process.env.REACT_APP_DEVELOPMENT_BACK}/tasks/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text }),
  }).then((res) => res.json());
}

function* worker(action) {
  const newTask = yield call(createTaskFetch, action.payload);

  if (newTask) {
    yield put(createTask(newTask));
  }
}

function* watcher() {
  yield takeEvery(ADD_TASK_SAGA, worker);
}

export default watcher;
