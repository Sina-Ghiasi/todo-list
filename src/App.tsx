import "./App.css";
import { Provider } from "react-redux";
import Layout from "./components/Layout/Layout";
import TodoList from "./components/TodoList/TodoList";
import store from "./features/store";
import ToasterManager from "./components/ToastManager/ToasterManager";
import ThemeSetter from "./components/ThemeSetter/ThemeSetter";

const App = () => {
  return (
    <Provider store={store}>
      <Layout>
        <TodoList />
      </Layout>
      <ToasterManager maxVisibleToasts={1} />
      <ThemeSetter />
    </Provider>
  );
};
export default App;
