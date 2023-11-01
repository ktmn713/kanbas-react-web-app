import Nav from "../Nav";
import Assignment3 from "./a3";
import Assignment4 from "./a4";
import { Routes, Route, Navigate } from "react-router";
import store from "./store";
import { Provider } from "react-redux";
import HelloRedux from "./a4/ReduxExamples/HelloRedux";
import CounterRedux from "./a4/ReduxExamples/CounterRedux";
import AddRedux from "./a4/ReduxExamples/AddRedux";
import TodoList from "./a4/ReduxExamples/todos/TodoList";

function Labs() {
  return (
    <Provider store={store}>
      <div className="container">
        <Nav />
        <Routes>
          <Route path="/" element={<Navigate to="a3" />} />
          <Route path="a3" element={<Assignment3 />} />
          <Route path="a4" element={<Assignment4 />} />
        </Routes>
        <HelloRedux />
        <CounterRedux />
        <AddRedux />
        <TodoList />
      </div>
    </Provider>
  );
}

export default Labs;