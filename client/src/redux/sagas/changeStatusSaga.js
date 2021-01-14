import { put, takeEvery, call } from 'redux-saga/effects';
import { changeStatus } from '../actions/actions';
import { STATUS_SAGA } from '../types/types';

function changeStatusFetch(id) {
  return fetch(`${process.env.REACT_APP_DEVELOPMENT_BACK}/tasks/${id}`, {
    method: 'PATCH',
  }).then((res) => {
    if (res.status === 200) {
      return res.json();
    }
  });
}

function* worker(action) {
  const status = yield call(changeStatusFetch, action.payload);
  if (status) {
    yield put(changeStatus(action.payload));
  }
}

function* watcher() {
  yield takeEvery(STATUS_SAGA, worker);
}

export default watcher;
