import TodoList from "./TodoList";
import NewTodo from "./NewTodo";
import TodoContextProvider from "./TodoContext";

const App = () => {
  return (
    <TodoContextProvider>
      <NewTodo />
      <TodoList />
    </TodoContextProvider>
  );
};

export default App;
