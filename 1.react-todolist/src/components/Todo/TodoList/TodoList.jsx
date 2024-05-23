import TodoItem from "../TodoItem/TodoItem";
import "./todolist.css";

const TodoList = ({ todoList, deleteTodo, toggleDone }) => {
  const workingTodos = todoList.filter((todo) => !todo.isDone);
  const doneTodos = todoList.filter((todo) => todo.isDone);

  return (
    <section>
      <div className="working-container">
        <p>Working..📚</p>
        <div className="working-todo-list">
          {workingTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodo}
              toggleDone={toggleDone}
            />
          ))}
        </div>
      </div>
      <div className="done-container">
        <p>Done..!!🎉</p>
        <div className="done-todo-list">
          {doneTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodo}
              toggleDone={toggleDone}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TodoList;
