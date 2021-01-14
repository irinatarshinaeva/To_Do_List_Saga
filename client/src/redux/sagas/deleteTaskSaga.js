import { put, takeEvery, call } from 'redux-saga/effects';
import { deleteTask } from '../actions/actions';
import { DELETE_SAGA } from '../types/types';

function getAllList(id) {
  return fetch(`${process.env.REACT_APP_DEVELOPMENT_BACK}/tasks/${id}`, {
    method: 'DELETE',
  }).then((res) => res.status === 200);
}

function* worker(action) {
  const status = yield call(getAllList, action.payload);
  if (status) {
    yield put(deleteTask(action.payload));
  }
}

function* watcher() {
  yield takeEvery(DELETE_SAGA, worker);
}

export default watcher;
