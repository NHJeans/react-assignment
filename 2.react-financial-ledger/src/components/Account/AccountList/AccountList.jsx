import AccountItem from "../AccountItem";
import { List, NullData } from "./style";

const AccountList = ({ filteredExpenses, selectedMonth }) => {
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
