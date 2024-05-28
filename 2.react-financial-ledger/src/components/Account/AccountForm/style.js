
import { styled } from 'styled-components';


export const Form = styled.form`
  font-family: 'GmarketSansMedium', sans-serif;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  padding: 40px;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  font-size: 16px;
`;

export const Input = styled.input`
  font-family: "GmarketSansMedium", sans-serif;
  margin-bottom: 10px;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  background-color: white;
  &[type="date"] {
    color: #888;
  }
`;

export const Button = styled.button`
  padding: 10px;
  margin-top: 20px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  background-color: #7AB2B2;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #4D869C;
  }
`;

export const FormContainer = styled.div`
  background-color: #EEF7FF;
  margin: 30px 0;
  border-radius: 20px;
`;
