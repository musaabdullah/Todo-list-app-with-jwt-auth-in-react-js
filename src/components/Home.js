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
      <div className="row">
        <div className="col-md-6">
          <div className="list-group"></div>
          {state.todos &&
            state.todos.map((todo) => {
              return (
                <div className="list-group">
                  <div className="list-group-item">{todo.todo}</div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Home;
