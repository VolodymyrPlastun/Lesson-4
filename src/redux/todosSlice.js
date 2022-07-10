import { createSlice } from '@reduxjs/toolkit';

// const initialState = {todos: []}

export const todosSlice = createSlice({
  name: 'todos',
  initialState: {todos: []},
  reducers: {
    addTodo: (state, { payload }) => {state.todos = [...state.todos, payload]},
    deleteTodo: (state, { payload }) => {
      state.todos = state.todos.filter(({ id }) => 
      id !== payload
    )},
  },
});

export const getTodo = state => state.todos;

export const { addTodo, deleteTodo } = todosSlice.actions;

export default todosSlice.reducer;
