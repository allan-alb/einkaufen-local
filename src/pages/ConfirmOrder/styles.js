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
    margin: 10px;
    padding: 20px;
`;

export const Text = styled.h1`
  color: #333;
  font-size: 20px;
  text-align: center;
`;

export const SubText = styled.p`
  color: #333;
  font-size: 16px;
  text-align: center;
`;

export const Form = styled.form`
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  height: 40px;
  padding: 10px;
  margin: 10px;
`;

export const TotalText = styled.h3`
    color #333;
    font-size: 18px;
`;

export const PlaceOrderButton = styled.button`
  margin: 20px 0 10px 0;
  padding: 10px 20px;
  width: 200px;
  border-radius: 4px;
  background: #2418a8;
  font-weight: bold;
  color: #DDD;

  &:hover {
    opacity: 0.8;
  }
`;