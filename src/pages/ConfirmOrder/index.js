import { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

import { loadFromLocalStorage, saveToLocalStorage } from '../../utils/localStorage';

import { 
  Container, 
  Content,
  Text,
  SubText,
  Form, 
  Input,
  TotalText,
  PlaceOrderButton,
} from './styles';

function ConfirmOrder() {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [cartProducts, setCartProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [redirect, setRedirect] = useState(false);

  function submitForm() {
    const order = {
      name,
      cpf,
      cartProducts,
      total,
    }

    let orders = loadFromLocalStorage("orders");
    if (!orders) {
      orders = [];
    }
    orders.push(order);
    saveToLocalStorage(orders, "orders");
    saveToLocalStorage([], "cart");
    alert("Pedido registrado");
    setRedirect(true);
  }

  useEffect(() => {
    let totalSum = 0;
    let cartItems = [];
    const itemsArray = loadFromLocalStorage("cart");
    itemsArray.forEach(item => {
      cartItems.push({ item: item.id, quantity: item.quantity });
      totalSum += parseFloat(item.price) * item.quantity;
    });
    setCartProducts(cartItems);
    setTotal(totalSum.toFixed(2));
  }, [])

  if (redirect) {
    return <Redirect to="/orders"/>
  }

  return (
    <>
      <Container>
        <Content>
          <Text>Seu pedido está quase concluído</Text>
          <SubText>Favor preencha os dados abaixo para concluir seu pedido</SubText>
          <Form>
            <Input 
              type="text" 
              placeholder="Nome completo" 
              onChange={(e) => setName(e.target.value)} 
              value={name}
            />
            <Input 
              type="text" 
              placeholder="CPF" 
              onChange={(e) => setCpf(e.target.value)} 
              value={cpf}
            />
            <TotalText>
              Total: R$ {total}
            </TotalText>
            <PlaceOrderButton onClick={submitForm}>Confirmar pedido</PlaceOrderButton>
          </Form>
        </Content>
      </Container>
    </>
  )
}

export default ConfirmOrder;