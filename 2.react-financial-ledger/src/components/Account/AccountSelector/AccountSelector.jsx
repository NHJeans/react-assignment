import { Tabs, Tab } from "./style";

const AccountSelector = ({ selectedMonth, setSelectedMonth }) => {
  const MONTHS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <Tabs>
      {MONTHS.map((month) => (
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
