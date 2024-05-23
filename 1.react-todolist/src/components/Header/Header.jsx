import "./header.css";
import azzi from "../../assets/azzi.jpg";

const Header = () => {
  return (
    <header>
      <h1>My Todo List</h1>
      <span>
        <p>React</p>
        <img src={azzi} alt="azzi" />
      </span>
    </header>
  );
};

export default Header;
