import { Provider } from "react-redux";
import "./App.css";
import Layout from "./components/Layout/Layout";
import TodoList from "./components/TodoList/TodoList";
import store from "./features/store";
import ToasterManager from "./components/ToastManager/ToasterManager";

const App = () => {
  return (
    <Provider store={store}>
      <Layout>
        <TodoList />
      </Layout>
      <ToasterManager maxVisibleToasts={1} />
    </Provider>
  );
};
export default App;
