import TodoList from "./components/TodoList/TodoList";
import NewTodo from "./components/NewTodo/NewTodo";
import TodoContextProvider from "./store/TodoContext";

const App = () => {
  return (
    <TodoContextProvider>
      <NewTodo />
      <TodoList />
    </TodoContextProvider>
  );
};

export default App;
