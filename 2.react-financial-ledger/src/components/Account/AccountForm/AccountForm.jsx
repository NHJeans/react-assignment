import { Form, Label, Input, Button, FormContainer } from "./style";
import { useSelector, useDispatch } from "react-redux";
import {
  addExpense,
  setDate,
  setItem,
  setAmount,
  setDescription,
} from "../../../redux/slices/expensesSlice";

const AccountForm = () => {
  const date = useSelector((state) => state.expenses.date);
  const item = useSelector((state) => state.expenses.item);
  const amount = useSelector((state) => state.expenses.amount);
  const description = useSelector((state) => state.expenses.description);
  const dispatch = useDispatch();

  const handleChange = (setter) => (e) => {
    dispatch(setter(e.target.value));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!date || !item || !amount || !description) {
      return alert("모든 항목을 입력해주세요.");
    }
    const newExpense = {
      id: crypto.randomUUID(),
      date,
      item,
      amount: parseInt(amount, 10),
      description,
    };
    dispatch(addExpense(newExpense));
    dispatch(setDate(""));
    dispatch(setItem(""));
    dispatch(setAmount(""));
    dispatch(setDescription(""));
  };

  return (
    <FormContainer>
      <Form onSubmit={onSubmit}>
        <Label>날짜</Label>
        <Input
          type="date"
          value={date}
          required
          onChange={handleChange(setDate)}
        />
        <Label>항목</Label>
        <Input
          type="text"
          value={item}
          placeholder="지출 항목"
          required
          onChange={handleChange(setItem)}
        />
        <Label>금액</Label>
        <Input
          type="number"
          value={amount}
          placeholder="지출 금액"
          required
          onChange={handleChange(setAmount)}
        />
        <Label>지출 내용</Label>
        <Input
          type="text"
          value={description}
          placeholder="지출 내용"
          required
          onChange={handleChange(setDescription)}
        />
        <Button type="submit">저장</Button>
      </Form>
    </FormContainer>
  );
};

export default AccountForm;
