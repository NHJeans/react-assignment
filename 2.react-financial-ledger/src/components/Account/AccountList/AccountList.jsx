import { useContext } from "react";
import { AccountContext } from "../../../context/AccountContext";
import AccountItem from "../AccountItem";
import { List, NullData } from "./style";

const AccountList = () => {
  const { expenses, selectedMonth } = useContext(AccountContext);
  const filteredExpenses = expenses.filter(
    (expense) => parseInt(expense.date.split("-")[1], 10) === selectedMonth
  );
  return (
    <List>
      {filteredExpenses.length === 0 ? (
        <NullData>{selectedMonth}월 지출 내역이 없습니다 </NullData>
      ) : (
        filteredExpenses.map((expense) => (
          <AccountItem key={expense.id} expense={expense} />
        ))
      )}
    </List>
  );
};
export default AccountList;
