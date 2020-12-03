import styled from 'styled-components';

export const Container = styled.div`
    margin: 10px 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    border-radius: 20px;
    width: 80%;
    margin: 0 40px;
    background: #ddd;
    padding: 20px;
`;

export const Text = styled.h2`
  color: #333;
  font-size: 20px;
  text-align: center;
`;

export const Paragraph = styled.p`
  color: #333;
  font-size: 16px;
  text-align: center;
  margin-bottom: 10px;
`;

export const OrdersList = styled.div`
  padding: 20px;
`;

export const Order = styled.div`
    border: 1px #888 solid;
    border-radius: 4px;
    padding: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

export const OrderText = styled.h3`
  color: #333;
  font-size: 16px;  
`;

export const ItemsList = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
`;

export const Item = styled.div`
  border: 1px #aaa solid;
  border-radius: 4px;
  padding: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ItemText = styled.span`
  color: #333;
  font-size: 14px;
  margin: 0 5px;
`;