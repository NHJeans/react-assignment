import "./todoform.css";
import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onChangeTitleHandler = (e) => {
    setTitle(e.target.value);
  };
  const onChangeContentHandler = (e) => {
    setContent(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      addTodo(title, content);
      setTitle("");
      setContent("");
    } else {
      alert("제목과 내용을 모두 입력해주세요.");
    }
  };
  return (
    <div className="create-container">
      <form onSubmit={onSubmit}>
        <div className="input-group">
          <label className="title-label"></label>
          <input
            className="title-input"
            type="text"
            placeholder="제목을 입력하세요!!"
            value={title}
            onChange={onChangeTitleHandler}
          />
          <label className="content-label"></label>
          <input
            className="content-input"
            type="text"
            placeholder="내용을 입력하세요!!"
            value={content}
            onChange={onChangeContentHandler}
          />
        </div>
        <div className="submit-button-container">
          <input className="submit-button" type="submit" value="추가" />
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
