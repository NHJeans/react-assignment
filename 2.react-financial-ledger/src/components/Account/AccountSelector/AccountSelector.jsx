import { Tabs, Tab } from "./style";
import { AccountContext } from "../../../context/AccountContext";
import { useContext } from "react";

const AccountSelector = () => {
  const { selectedMonth, setSelectedMonth } = useContext(AccountContext);
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <Tabs>
      {months.map((month) => (
        <Tab
          key={month}
          $isSelected={selectedMonth === month}
          onClick={() => {
            setSelectedMonth(month);
          }}
        >
          {month}월
        </Tab>
      ))}
    </Tabs>
  );
};

export default AccountSelector;
