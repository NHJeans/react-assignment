import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AccountContext } from "../../context/AccountContext";
import {
  NoData,
  ButtonContainer,
  Label,
  Detail,
  Button,
  Input,
  Container,
  DetailItem,
} from "./style";

const DetailPage = () => {
  const {
    expenses,
    setExpenses,
    date,
    item,
    amount,
    description,
    setDate,
    setItem,
    setAmount,
    setDescription,
  } = useContext(AccountContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [foundExpense, setFoundExpense] = useState(null);

  useEffect(() => {
    const expense = expenses.find((item) => item.id === id);
    if (expense) {
      setDate(expense.date);
      setItem(expense.item);
      setAmount(expense.amount);
      setDescription(expense.description);
      setFoundExpense(expense);
    } else {
      setFoundExpense(null);
    }
  }, [id, expenses, setDate, setItem, setAmount, setDescription]);

  const handleDelete = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      setExpenses((prevExpenses) =>
        prevExpenses.filter((expense) => expense.id !== id)
      );
      setDate("");
      setItem("");
      setAmount("");
      setDescription("");
      navigate("/");
    }
  };

  const handleUpdate = () => {
    const updatedExpense = {
      id,
      date,
      item,
      amount: parseInt(amount, 10),
      description,
    };
    setExpenses((prevExpenses) =>
      prevExpenses.map((expense) =>
        expense.id === updatedExpense.id ? updatedExpense : expense
      )
    );
    setDate("");
    setItem("");
    setAmount("");
    setDescription("");
    navigate("/");
  };

  return (
    <Container>
      {foundExpense ? (
        <Detail>
          <DetailItem>
            <Label>날짜:</Label>
            <Input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </DetailItem>
          <DetailItem>
            <Label>항목:</Label>
            <Input
              type="text"
              value={item}
              onChange={(e) => setItem(e.target.value)}
            />
          </DetailItem>
          <DetailItem>
            <Label>금액:</Label>
            <Input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </DetailItem>
          <DetailItem>
            <Label>내용:</Label>
            <Input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </DetailItem>
          <ButtonContainer>
            <Button onClick={handleUpdate}>수정</Button>
            <Button onClick={handleDelete}>삭제</Button>
            <Button onClick={() => navigate("/")}>뒤로가기</Button>
          </ButtonContainer>
        </Detail>
      ) : (
        <NoData>
          <div>데이터가 존재하지 않습니다</div>
          <Button onClick={() => navigate("/")}>홈 화면으로 이동</Button>
        </NoData>
      )}
    </Container>
  );
};

export default DetailPage;
