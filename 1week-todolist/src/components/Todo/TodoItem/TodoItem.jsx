import "./todoitem.css";

const TodoItem = ({ todo, deleteTodo, toggleDone }) => {
  const { id, title, content, isDone } = todo;
  const itemClass = isDone ? "done-item" : "working-item";

  return (
    <div className={`todo-item ${itemClass}`}>
      <div className="todo-item-content">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
      <div className="todo-item-buttons">
        <button className="delete-button" onClick={() => deleteTodo(id)}>
          삭제 🗑️
        </button>
        <button className="toggle-button" onClick={() => toggleDone(id)}>
          {todo.isDone ? "취소 ↩️" : "완료 ✅"}
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
