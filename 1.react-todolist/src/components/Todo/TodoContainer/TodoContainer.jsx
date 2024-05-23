import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";
import Confetti from "react-confetti";
import { useState } from "react";

const TodoContainer = () => {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      title: "투두 리스트 만들기",
      content: "투두 리스트 과제",
      isDone: true,
    },
    {
      id: 2,
      title: "리액트 공부하기",
      content: "리액트 기초를 공부해봅시다.",
      isDone: false,
    },
  ]);
  const [confetti, setConfetti] = useState(false);

  const addTodo = (title, content) => {
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      content,
      isDone: false,
    };
    setTodoList([...todoList, newTodo]);
  };
  const deleteTodo = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const toggleDone = (id) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
    if (!todoList.find((todo) => todo.id === id).isDone) {
      setConfetti(true);
      setTimeout(() => setConfetti(false), 2000);
    }
  };

  return (
    <main>
      {confetti && (
        <Confetti
          numberOfPieces={500}
          wind={0.01}
          gravity={0.1}
          opacity={0.6}
          initialVelocityX={4}
          initialVelocityY={10}
        />
      )}
      <TodoForm addTodo={addTodo} />
      <TodoList
        todoList={todoList}
        deleteTodo={deleteTodo}
        toggleDone={toggleDone}
      />
    </main>
  );
};

export default TodoContainer;
