import { styled } from 'styled-components';

export const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  justify-items: center;
  align-items: center;
  gap: 1rem;
  background-color: #eef7ff;
  padding: 1rem;
  border-radius: 10px;
  margin-bottom: 3rem;
`;

export const Tab = styled.button`
  width: 100%;
  padding: 1rem;
  font-family: 'GmarketSansMedium', sans-serif;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  border: none;
  background-color: ${({ isSelected }) => (isSelected ? "#CDE8E5" : "#fff")};
  cursor: pointer;
  &:hover {
    background-color: ${({ isSelected }) =>
    isSelected ? "#7AB2B2" : "#e4e5e9"};
  }
`;