import * as TYPES from '../types/types';

export const createTask = (task) => ({
  type: TYPES.ADD,
  payload: task,
});

export const setTasks = (tasksList) => ({
  type: TYPES.ADD_ALL,
  payload: tasksList,
});

export const createTaskSaga = (text) => ({
  type: TYPES.ADD_TASK_SAGA,
  payload: text,
});

export const getAllTasks = () => async (dispatch, getState) => {
  const response = await fetch(`/tasks`);
  const tasksList = await response.json();
  if (tasksList) {
    dispatch(setTasks(tasksList));
  }
};

export const getAllTasksSaga = () => ({
  type: TYPES.GET_ALL_SAGA,
});

export const changeStatusSaga = (id) => ({
  type: TYPES.STATUS_SAGA,
  payload: id,
});

export const deleteTaskSaga = (id) => ({
  type: TYPES.DELETE_SAGA,
  payload: id,
});

export const createTaskThunk = (text) => async (dispatch, getState) => {
  const response = await fetch(`/tasks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text }),
  });

  if (response.status === 200) {
    const newTask = await response.json();
    dispatch(createTask(newTask));
  }
};

export const deleteTask = (id) => ({
  type: TYPES.DELETE,
  payload: id,
});

export const deleteTaskThunk = (id) => (dispatch, getState) => {
  fetch(`/tasks/${id}`, {
    method: 'DELETE',
  }).then((res) => res.status === 200 && dispatch(deleteTask(id)));
};

export const changeStatus = (id) => ({
  type: TYPES.STATUS,
  payload: id,
});

export const changeStatusThunk = (id) => (dispatch, getState) => {
  fetch(`/tasks/${id}`, {
    method: 'PATCH',
  })
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
    })
    .then((data) => data && dispatch(changeStatus(id)));
};
