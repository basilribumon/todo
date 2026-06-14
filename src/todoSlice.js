import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch API
export const fetchTodos = createAsyncThunk(
  "todos/fetchTodos",
  async () => {
    const response = await axios.get(
      "https://dummyjson.com/todos"
    );

    // Return only completed todos
    return response.data.todos.filter(
      (todo) => todo.completed === true
    );
  }
);

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    completedTodos: [],
    loading: false,
    error: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.completedTodos = action.payload;
      })

      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default todoSlice.reducer;