import { put, takeEvery, call } from 'redux-saga/effects';
import { setTasks } from '../actions/actions';
import { GET_ALL_SAGA } from '../types/types';

function getAllList() {
  return fetch(`${process.env.REACT_APP_DEVELOPMENT_BACK}/tasks`).then((res) =>
    res.json()
  );
}

function* worker() {
  const tasksList = yield call(getAllList);
  yield put(setTasks(tasksList));
}

function* watcher() {
  yield takeEvery(GET_ALL_SAGA, worker);
}

export default watcher;
