import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  deleteExpense,
  updateExpense,
  setDate,
  setItem,
  setAmount,
  setDescription,
} from "../../redux/slices/expensesSlice";
import {
  Button,
  ButtonContainer,
  Container,
  Detail,
  DetailItem,
  Input,
  Label,
  NoData,
} from "./style";

const DetailPage = () => {
  const { id } = useParams();
  const expenses = useSelector((state) => state.expenses.expenses);
  const date = useSelector((state) => state.expenses.date);
  const item = useSelector((state) => state.expenses.item);
  const amount = useSelector((state) => state.expenses.amount);
  const description = useSelector((state) => state.expenses.description);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [foundExpense, setFoundExpense] = useState(null);

  useEffect(() => {
    const expense = expenses.find((item) => item.id === id);
    if (expense) {
      dispatch(setDate(expense.date));
      dispatch(setItem(expense.item));
      dispatch(setAmount(expense.amount));
      dispatch(setDescription(expense.description));
      setFoundExpense(expense);
    } else {
      setFoundExpense(null);
    }
  }, [dispatch, expenses, id]);

  const handleDelete = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      dispatch(deleteExpense(id));
      dispatch(setDate(""));
      dispatch(setItem(""));
      dispatch(setAmount(""));
      dispatch(setDescription(""));
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
    dispatch(updateExpense(updatedExpense));
    dispatch(setDate(""));
    dispatch(setItem(""));
    dispatch(setAmount(""));
    dispatch(setDescription(""));
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
              onChange={(e) => dispatch(setDate(e.target.value))}
            />
          </DetailItem>
          <DetailItem>
            <Label>항목:</Label>
            <Input
              type="text"
              value={item}
              onChange={(e) => dispatch(setItem(e.target.value))}
            />
          </DetailItem>
          <DetailItem>
            <Label>금액:</Label>
            <Input
              type="number"
              value={amount}
              onChange={(e) => dispatch(setAmount(e.target.value))}
            />
          </DetailItem>
          <DetailItem>
            <Label>내용:</Label>
            <Input
              type="text"
              value={description}
              onChange={(e) => dispatch(setDescription(e.target.value))}
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
