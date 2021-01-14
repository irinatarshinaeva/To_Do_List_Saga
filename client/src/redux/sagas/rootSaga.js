import { all } from 'redux-saga/effects';
import getAllTasksSaga from './getTasksSaga';
import changeStatusSaga from './changeStatusSaga';
import deleteTaskSaga from './deleteTaskSaga';
import createTaskSaga from './createTaskSaga';

export default function* rootSaga() {
  yield all([
    getAllTasksSaga(),
    changeStatusSaga(),
    deleteTaskSaga(),
    createTaskSaga(),
  ]);
}
