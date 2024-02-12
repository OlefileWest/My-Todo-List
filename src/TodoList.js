import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./TodoList.css";
import { useState } from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function TodoList() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSaveClick = (e) => {
    e.preventDefault();
    if (inputValue != "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const handleDeleteClick = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <div id="body">
      <h1 id="heading">My Things To Do</h1>
      <input
        id="textBox"
        type="text"
        placeholder="Add a todo"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button id="saveButton" onClick={handleSaveClick}>
        Save
      </button>

      <ol className="list">
        {todos.map((todo, index) => (
          <li className="listItems" key={index}>
            {todo}
            <button onClick={handleDeleteClick} className="deleteButton">
              <a>
                <FontAwesomeIcon icon={faTrash} />
              </a>
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default TodoList;
