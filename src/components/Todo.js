import { useState, useEffect } from "react";

import "../scss/Todo.scss";

function TodoApp(params) {
  const [todoname, setTodoname] = useState("");
  const [todolist, setTodolist] = useState([]);

  //   TODO INPUT VALUE GET
  const updateTodoname = (e) => {
    const value = e.target.value;

    setTodoname(value);
  };
  // END TODO INPUT VALUE GET

  //START INPUT VALUE PUSH IN ARRAY OF OBJECT
  const clickAdd = () => {
    if (todoname != "") {
      setTodolist([...todolist, { name: todoname, isCompleted: false }]);
      setTodoname("");
    }
  };
  // END INPUT VALUE PUSH IN ARRAY OF OBJECT
  console.log(todolist);

  // LINTTHROUGH STYLE

  const handleMark = (index) => {
    const newtodolist = [...todolist];

    if (newtodolist[index].isCompleted) {
      newtodolist[index].isCompleted = false;
    } else {
      newtodolist[index].isCompleted = true;
    }
    setTodolist(newtodolist);
  };
  // END LINETHROUGH STYLE

  // START DELETE LIST

  const handleDelete = (index) => {
    const newtodolist = [...todolist];
    newtodolist.splice(index, 1);
    setTodolist(newtodolist);
  };

  // END DELET LIST
  // SIDE EFFECT CALL FUNCTION
  // 2 USEEFFECT WORK AAGUM,  SECOND ONE BEST PRACTISE;
  // useEffect(() => {
  //   window.addEventListener("keydown", handleKeypress);
  // });
  useEffect(() => {
    window.addEventListener("keydown", handleKeypress);
  }, [clickAdd]);

  // END USEEFFECT TO ENTERKEY

  // KEYPRESSCODE GET AND ONCLICK FUNCTION ADDED

  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.keyCode === 13) {
      clickAdd();
    }
  };
  // END KEYPRESSCODE GET AND ONCLICK FUNCTION ADDED

  return (
    <div>
      <div className="container">
        <div className="todo">
          {/* TITLE */}
          <div className="todo-title">
            <h4>Todo-List</h4>
          </div>
          {/* END TITLE */}
          {/* START INPUT AND BTN */}
          <div className="todo-input">
            <input
              type="text"
              placeholder="Daily Task"
              className="todo-input-text"
              value={todoname}
              onChange={updateTodoname}
            ></input>

            <button
              className="todo-input-btn"
              onClick={clickAdd}
              onKeyPress={handleKeypress}
            >
              <span className="btn-text">Add</span>
            </button>
          </div>
          {/* END INPUT AND BTN */}
          {/* demo */}
          <div className="todo-list--items">
            {todolist.map((item, i) => (
              <div>
                <div className="todo-list">
                  <div className="todo-list--item">
                    <div className="todovalue">
                      <p
                        onClick={() => handleMark(i)}
                        className={item.isCompleted ? "linethrough" : "line"}
                      >
                        {item.name}
                      </p>
                    </div>
                    <div className="todoicons">
                      <div className="todo-fa-icons">
                        {item.isCompleted ? (
                          <span className="faTime">
                            <i class="fas fa-times-circle"></i>
                          </span>
                        ) : (
                          <span className="faCheck">
                            <i class="fas fa-check-circle"></i>
                          </span>
                        )}
                        <span onClick={() => handleMark(i)} className="facheck">
                          {item.isCompleted ? (
                            <span className="check">Check</span>
                          ) : (
                            <span className="uncheck">Uncheck</span>
                          )}
                        </span>
                      </div>
                      <div
                        className="todo-del-icons"
                        onClick={() => handleDelete(i)}
                      >
                        <span>
                          <i class="far fa-trash-alt"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* end deom */}
        </div>
      </div>
    </div>
  );
}

export default TodoApp;
