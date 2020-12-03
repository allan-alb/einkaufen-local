import { useState, useEffect } from 'react';

import api from '../../services/api';

import { loadFromLocalStorage, saveToLocalStorage } from '../../utils/localStorage';

import Header from '../../components/Header';

import { 
  Container, 
  List, 
  Item, 
  ItemInfo,
  ItemImage, 
  ItemTitle, 
  ItemDescription, 
  ItemPrice, 
  AddToCartButton,
} from './styles';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);

  async function loadProducts() {
    const response = await api.get('/products');

    setProducts(response.data);
  }

  useEffect(() => {
    loadProducts();
    const persistedState = loadFromLocalStorage("cart");
    if (persistedState) {
      setCartProducts(persistedState);
    }
  }, []);

  useEffect(() => {
    saveToLocalStorage(cartProducts, "cart");
  }, [cartProducts]);

  function addItem(product) {
    const elementPos = cartProducts.findIndex((element) => (element.id === product.id));
    
    if (elementPos === -1) {   
      setCartProducts([...cartProducts, { ...product, quantity: 1 }]);
    } else {
      let itemsArray = cartProducts.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 }
        }
        return item;
      });
      setCartProducts(itemsArray);
    }
  }

  return (
    <>
      <Header itemCount={cartProducts.length} />
      <Container>
        <List>
          {
            products.map(product => (
              <Item>
                <ItemImage src={product.img_url} />
                <ItemInfo>
                  <ItemTitle>
                    {product.title}
                  </ItemTitle>
                  <ItemDescription>
                    {product.description}
                  </ItemDescription>
                  <ItemPrice>R$ {product.price}</ItemPrice>
                </ItemInfo>
                <AddToCartButton onClick={() => addItem(product)}>Adicionar</AddToCartButton>
              </Item>
            ))
          }
        </List>
      </Container>
    </>
  );
}

export default ProductList;