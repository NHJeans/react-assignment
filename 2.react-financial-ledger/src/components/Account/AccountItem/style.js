import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.02);
  }
`;
export const Content = styled.span`
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #42b4aa;
`;
export const Item = styled.span`
  background-color: #c0e4e1;
  color: black;
  padding: 0 0.2rem;
`;

export const Description = styled.span`
  &::before {
    content: " - ";
    color: black;
  }
`;
export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
export const Amount = styled.span`
  font-size: 0.9rem;
`;
export const Date = styled.span`
  font-size: 0.8rem;
  color: #545454;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  &:hover {
    color: #7ab2b2;
  }
`;
