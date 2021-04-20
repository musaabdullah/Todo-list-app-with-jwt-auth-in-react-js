import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";

import { getTodo } from "../redux/actions/todo";

function Home() {
  const state = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodo());
  }, []);
  console.log(state.todos);

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-md-4">
            <h3 className="my-4  d-flex justify-content-between">
              <span>Todo List</span>
              <button className="btn btn-primary">Add Todo</button>
            </h3>
            <div className="list-group"></div>
            {state.todos &&
              state.todos.map((todo) => {
                return (
                  <div className="list-group p-0">
                    <div className="list-group-item p-2 my-1 d-flex align-items-center justify-content-between">
                      {todo.todo}
                      <button className="btn btn-danger ">Remove</button>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
