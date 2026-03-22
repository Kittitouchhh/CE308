import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state: TodoState, action: PayloadAction<Omit<Todo, 'id' | 'completed'>>) => {
      const newTodo: Todo = {
        id: uuidv4(),
        text: action.payload.text,
        completed: false,
      };
      state.todos.push(newTodo);
    },

    toggleTodo: (state: TodoState, action: PayloadAction<string>) => {
      const todo = state.todos.find((todo: Todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },

    removeTodo: (state: TodoState, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo: Todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
