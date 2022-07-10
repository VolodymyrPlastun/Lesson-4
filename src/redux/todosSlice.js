import { createSlice } from '@reduxjs/toolkit';

export const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, { payload }) => [...state, payload],
  },
});

export const getTodo = state => state.todos;

export const { addTodo } = todosSlice.actions;
