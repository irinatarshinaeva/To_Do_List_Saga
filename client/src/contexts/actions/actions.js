import * as TYPES from '../types/types';

export const createTask = (text) => ({
  type: TYPES.ADD,
  payload: {
    _id: Date.now(),
    text,
    status: false,
  },
});

export const deleteTask = (id) => ({
  type: TYPES.DELETE,
  payload: id,
});

export const changeStatus = (id) => ({
  type: TYPES.STATUS,
  payload: id,
});
