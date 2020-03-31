import styled from 'styled-components';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 260px;
  height: 380px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 1px solid black;
  background-color: white;
  top: 80px;
  right: 40px;
  z-index: 5;
  overflow-x: hidden;
  overflow-y: hidden;
`;

export const CartItemsContainer = styled.div`
  height: 300px;
  width: 235px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const EmptyMessageContainer = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;
