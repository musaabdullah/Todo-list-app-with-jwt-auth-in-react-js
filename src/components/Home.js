import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import "../App.css";
import {
  getTodo,
  removeTodo,
  currentTodo,
  completeTodo,
} from "../redux/actions/todo";
import AddTodo from "./AddTodo";

function Home() {
  const state = useSelector((state) => state);

  const dispatch = useDispatch();
  console.log(state.todo.currentTodo);
  useEffect(() => {
    dispatch(getTodo(state.user.user._id));
  }, [state.user.user._id]);
  //   console.log(state.todos);
  const handleRemove = (id) => {
    dispatch(removeTodo(id));
  };

  const handleCurrent = (id) => {
    dispatch(currentTodo(id));
  };

  const handleCompleteTodo = (id) => {
    dispatch(completeTodo(id));
  };
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-md-8">
            <h3 className="my-4  d-flex justify-content-between">
              <span>Todo List</span>
              <AddTodo />
            </h3>

            <div className="list-group shadow m-0 p-0">
              {state.todo.todos &&
                state.todo.todos.map((todo) => {
                  return (
                    <div
                      key={todo._id}
                      className="list-group-item p-2 my-1 d-flex align-items-center justify-content-between"
                    >
                      <span
                        className={`${todo.completed ? "line-through" : ""}`}
                      >
                        {" "}
                        {todo.todo}{" "}
                      </span>
                      <div>
                        <button
                          onClick={() => handleCompleteTodo(todo._id)}
                          className="btn btn-dark"
                        >
                          Complete
                        </button>
                        <button
                          onClick={() => handleCurrent(todo._id)}
                          className="btn btn-success mx-2"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleRemove(todo._id)}
                          className="btn btn-danger "
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
