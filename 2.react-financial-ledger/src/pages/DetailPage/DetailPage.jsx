import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

const DetailPage = ({ expenses, handleDeleteExpense, handleUpdateExpense }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [date, setDate] = useState("");
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState("");
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
  }, [id, expenses]);

  const handleDelete = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      handleDeleteExpense(id);
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
    handleUpdateExpense(updatedExpense);
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

const NoData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

export const Container = styled.div`
  font-family: "GmarketSansMedium", sans-serif;
  font-size: 16px;
  padding: 20px;
  border-radius: 10px;
  width: 400px;
  background-color: #eef7ff;
  margin: 100px auto;
`;

export const Detail = styled.div`
  margin-bottom: 20px;
`;

export const DetailItem = styled.div`
  margin-bottom: 10px;
`;

export const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  font-family: "GmarketSansMedium", sans-serif;
  width: 90%;
  padding: 10px;
  border: none;
  border-radius: 5px;
`;
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const Button = styled.button`
  width: 100px;
  padding: 10px;
  margin-right: 10px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  background-color: #7ab2b2;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #4d869c;
  }
`;

export default DetailPage;
