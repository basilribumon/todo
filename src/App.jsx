import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "./todoSlice";

function App() {
  const dispatch = useDispatch();

  const { completedTodos, loading, error } = useSelector(
    (state) => state.todos
  );

  return (
    <>
      <button onClick={() => dispatch(fetchTodos())}>
        Show Completed Tasks
      </button>

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      <ul>
        {completedTodos.map((todo) => (
          <li key={todo.id}>{todo.todo}</li>
        ))}
      </ul>
    </>
  );
}

export default App;