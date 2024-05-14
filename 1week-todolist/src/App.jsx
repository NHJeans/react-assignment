import "./App.css";
import Header from "./components/Header/Header";
import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  // working, done에 저장되는 todo 데이터
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      title: "리액트 공부하기",
      content: "리액트 기초를 공부해봅시다.",
      isDone: false,
    },
  ]);

  const onChangeTitleHandler = (e) => {
    setTitle(e.target.value);
  };
  const onChangeContentHandler = (e) => {
    setContent(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (title && content) {
      const newTodo = {
        id: crypto.randomUUID(),
        title,
        content,
        isDone: false,
      };
      setTodoList([...todoList, newTodo]);
      setTitle("");
      setContent("");
    } else {
      alert("제목과 내용을 모두 입력해주세요.");
    }
  };

  const onClickDeleteHandler = (id) => {
    const deleteTodo = todoList.filter((todo) => {
      return todo.id !== id;
    });
    setTodoList(deleteTodo);
  };

  const onClickDoneHandler = (id) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <main>
      <Header />

      <div className="create-container">
        <form onSubmit={onSubmitHandler}>
          <label>제목</label>
          <input
            type="text"
            placeholder="제목"
            value={title}
            onChange={onChangeTitleHandler}
          />
          <label>내용</label>
          <input
            type="text"
            placeholder="내용"
            value={content}
            onChange={onChangeContentHandler}
          />
          <input type="submit" value="추가" />
        </form>
      </div>

      <section>
        <p>Working..🔥</p>
        <div className="todo-list">
          {todoList
            .filter((todo) => !todo.isDone)
            .map((todo) => (
              <div key={todo.id}>
                <h3>{todo.title}</h3>
                <p>{todo.content}</p>
                <button onClick={() => onClickDeleteHandler(todo.id)}>
                  삭제
                </button>
                <button onClick={() => onClickDoneHandler(todo.id)}>
                  완료
                </button>
              </div>
            ))}
        </div>

        <p>isDone 👍</p>
        <div className="todo-list">
          {todoList
            .filter((todo) => todo.isDone)
            .map((todo) => (
              <div key={todo.id}>
                <h3>{todo.title}</h3>
                <p>{todo.content}</p>
                <button onClick={() => onClickDeleteHandler(todo.id)}>
                  삭제
                </button>
                <button onClick={() => onClickDoneHandler(todo.id)}>
                  취소
                </button>
              </div>
            ))}
        </div>
      </section>
    </main>
  );
}

export default App;
