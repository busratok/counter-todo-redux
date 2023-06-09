import "./App.css";
import Counter from "./components/counter/Counter";
import Todo from "./components/todo/Todo";
import { Provider } from "react-redux";
import { store } from "./redux";

function App() {
  return (
    <div className="app">
      {/* Wrapped with provider and store is passed to the store prop */}
      <Provider store={store}>
        <Counter />
        <Todo />
      </Provider>
    </div>
  );
}

export default App;
