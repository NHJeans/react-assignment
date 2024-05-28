import { styled } from 'styled-components';

export const NoData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

export const Container = styled.div`
  font-family: "GmarketSansMedium", sans-serif;
  font-size: 16px;
  padding: 20px;
  border-radius: 10px;
  width: 400px;
  background-color: #eef7ff;
  margin: 100px auto;
`;

export const Detail = styled.div`
  margin-bottom: 20px;
`;

export const DetailItem = styled.div`
  margin-bottom: 10px;
`;

export const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  font-family: "GmarketSansMedium", sans-serif;
  width: 90%;
  padding: 10px;
  border: none;
  border-radius: 5px;
`;
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const Button = styled.button`
  width: 100px;
  padding: 10px;
  margin-right: 10px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  background-color: #7ab2b2;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #4d869c;
  }
`;