import { useState } from "react";
import { Form, Label, Input, Button, FormContainer } from "./style";

const AccountForm = ({ setExpenses }) => {
  const [date, setDate] = useState("");
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const handleChange = (setter) => (e) => {
    setter(e.target.value);
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
      amount,
      description,
    };
    setExpenses((prevExpenses) => [newExpense, ...prevExpenses]);

    setDate("");
    setItem("");
    setAmount("");
    setDescription("");
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
