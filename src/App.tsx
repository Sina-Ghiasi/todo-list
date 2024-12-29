import { Provider } from "react-redux";
import "./App.css";
import Layout from "./components/Layout/Layout";
import TodoList from "./components/TodoList/TodoList";
import store from "./features/store";
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <Provider store={store}>
      <Layout>
        <TodoList />
      </Layout>
      <Toaster />
    </Provider>
  );
};
export default App;
