import { styled } from 'styled-components';

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-family: 'GmarketSansMedium', sans-serif;
  padding: 1rem;
  margin-bottom: 2rem;
  background-color: #eef7ff;
  border-radius: 10px;
  max-height: 400px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none; 
  }
  scrollbar-width: none; 
  -ms-overflow-style: none; 
`;

export const NullData = styled.div`
  text-align: center;
`;