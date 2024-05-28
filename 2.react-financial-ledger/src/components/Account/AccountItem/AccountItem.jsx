import {
  Content,
  Item,
  ItemContainer,
  StyledLink,
  Date,
  Amount,
  Info,
  Description,
} from "./style";

const AccountItem = ({ expense }) => {
  return (
    <StyledLink to={`/detail/${expense.id}`}>
      <ItemContainer>
        <Content>
          <Item>{expense.item}</Item>
          <Description>{expense.description}</Description>
        </Content>
        <Info>
          <Date>{expense.date}</Date>
          <Amount>{expense.amount.toLocaleString()}원</Amount>
        </Info>
      </ItemContainer>
    </StyledLink>
  );
};

export default AccountItem;
