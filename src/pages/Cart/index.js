import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
import { MdAddCircleOutline, MdRemoveCircleOutline, MdCancel } from 'react-icons/md';

import { loadFromLocalStorage, saveToLocalStorage } from '../../utils/localStorage';

import Header from '../../components/Header';

import { 
  Container, 
  Content, 
  Item, 
  ItemsList, 
  NoItemsDiv,
  NoItems,
  ItemTitle, 
  ItemImage,
  ActionButton,
  Quantity,
  ControlPriceContainer, 
  Controls,
  ItemPrice,
  TotalText,
  ButtonContainer,
  PlaceOrderButton,
} from './styles';

function Cart() {
  const [cartProducts, setCartProducts] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0.0);

  useEffect(() => {
    const persistedState = loadFromLocalStorage("cart");
    if (persistedState) {
      setCartProducts(persistedState);
    }
  }, [])

  useEffect(() => {
    saveToLocalStorage(cartProducts, "cart");
    function calculateTotal() {
      let totalSum = 0.0;
      cartProducts.forEach(product => {
        totalSum += parseFloat(product.price) * product.quantity;
      });
      setTotalAmount(totalSum.toFixed(2));
    }
    calculateTotal();
  }, [cartProducts])

  function incrementItem(id) {
    let itemsArray = cartProducts.map((item) => {
      if (item.id === id) {
        return {...item, quantity: item.quantity + 1}
      }
      return item;
    });
    setCartProducts(itemsArray);
  }

  function decrementItem(id) {
    let itemsArray = cartProducts.map((item) => {
      if (item.id === id) {
        if (item.quantity < 2) {
          return item;
        }
        return {...item, quantity: item.quantity - 1}
      }
      return item;
    });
    setCartProducts(itemsArray);
  }

  function removeItem(id) {
    let newCart = cartProducts.filter(element => element.id !== id);
    setCartProducts(newCart);
  }

  if (cartProducts.length === 0) {
    return (
      <>
        <Header itemCount={cartProducts.length} />
        <Container>
          <Content>
            <ItemsList>
              <NoItemsDiv>
                <NoItems>Você não tem items no seu carrinho. Clique abaixo para navegar pelo catálogo de produtos.</NoItems>
                <Link to="/products">Ir para catálogo de produtos</Link>
              </NoItemsDiv>
            </ItemsList>
          </Content>
        </Container>
      </>
    )
  }

  return (
    <>
      <Header itemCount={cartProducts.length} />
      <Container>
        <Content>
          <ItemsList>
            {
              cartProducts.map(product => (
                <Item>
                  <ItemImage src={product.img_url} />
                  <ItemTitle>{product.title}</ItemTitle>
                  <ControlPriceContainer>
                    <Controls>
                      <ActionButton onClick={() => incrementItem(product.id)}>
                        <MdAddCircleOutline color="#333" size={16} />
                      </ActionButton>
                      <Quantity type="text" value={product.quantity} disabled="disabled" maxLength="3" />
                      <ActionButton onClick={() => decrementItem(product.id)}>
                        <MdRemoveCircleOutline color="#333" size={16} />
                      </ActionButton>
                      <ActionButton onClick={() => removeItem(product.id)}>
                        <MdCancel color="#333" size={16} />
                      </ActionButton>
                    </Controls>
                    <ItemPrice>
                      R$ {product.price}
                    </ItemPrice>
                  </ControlPriceContainer>
                </Item>
              ))
            }
          </ItemsList>
          <TotalText>
            Total: R$ {totalAmount}
          </TotalText>
          <ButtonContainer>
            <Link to="/confirm">
              <PlaceOrderButton>
                Confirmar pedido
              </PlaceOrderButton>
            </Link>
          </ButtonContainer>
        </Content>
      </Container>
    </>
  );
}

export default Cart;