import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 30px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  &::before {
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${({ color }) => color};
    margin-right: 10px;
    border: 1px solid white;
  }
`;
