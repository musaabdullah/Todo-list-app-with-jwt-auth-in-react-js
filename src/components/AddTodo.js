import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/actions/todo";
function AddTodo() {
  const [todo, setTodo] = useState();
  const [completed, setCompleted] = useState(false);

  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  //   console.log(state.user.user);
  const handleAddTodo = (e) => {
    e.preventDefault();
    dispatch(addTodo({ todo, completed, userid: state.user.user._id }));
  };
  return (
    <>
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add Todo
      </button>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Add Todo
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <div className="form-group">
                  <lable style={{ fontSize: 20 }}>Todo title</lable>
                  <input
                    type="text"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    className="form-control"
                    placeholder="Todo Title"
                  />
                </div>
                <div className="form-group">
                  <lable style={{ fontSize: 20 }}>User name</lable>

                  <select className="form-control" disabled>
                    <option value={state.user.user._id}>
                      {state.user.user.username}
                    </option>
                  </select>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                onClick={handleAddTodo}
                type="button"
                class="btn btn-primary"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddTodo;
