import { Tabs, Tab } from "./style";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedMonth } from "../../../redux/slices/expensesSlice";

const AccountSelector = () => {
  const selectedMonth = useSelector((state) => state.expenses.selectedMonth);
  const dispatch = useDispatch();
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <Tabs>
      {months.map((month) => (
        <Tab
          key={month}
          $isSelected={selectedMonth === month}
          onClick={() => {
            dispatch(setSelectedMonth(month));
          }}
        >
          {month}월
        </Tab>
      ))}
    </Tabs>
  );
};

export default AccountSelector;
