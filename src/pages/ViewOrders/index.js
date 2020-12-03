import { useState, useEffect } from 'react';

import { loadFromLocalStorage } from '../../utils/localStorage';

import Header from '../../components/Header';

import { 
  Container, 
  Content, 
  Text, 
  Paragraph,
  OrdersList,
  Order,
  OrderText,
  ItemsList,
  Item,
  ItemText,
} from './styles';

function ViewOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const persistedState = loadFromLocalStorage("orders");
    if (persistedState) {
      setOrders(persistedState);
    }
  }, []);

  if (orders.length === 0){
    return (
      <>
        <Header />
        <Container>
          <Content>
            <Text>Consulte seus pedidos</Text>
            <Paragraph>Não há pedidos registrados</Paragraph>
          </Content>
        </Container>
      </>
    );
  }

  return (
    <>
      <Header />
      <Container>
        <Content>
          <Text>Consulte seus pedidos</Text>
          <OrdersList>
            {
              orders.map(order => (
                <Order>
                  <OrderText>
                    Nome: {order.name}
                  </OrderText>
                  <OrderText>
                    CPF: {order.cpf}
                  </OrderText>
                  <ItemsList>
                    {
                      order.cartProducts.map(item => (
                        <Item>
                          <ItemText>
                            Item nº: {item.item}, 
                          </ItemText>
                          <ItemText>
                            Qtde: {item.quantity}
                          </ItemText>
                        </Item>
                      ))
                    }
                  </ItemsList>
                  <OrderText>
                    Total: R$ {order.total}
                  </OrderText>
                </Order>
              ))
            }
          </OrdersList>
        </Content>
      </Container>
    </>
  );
}

export default ViewOrders;