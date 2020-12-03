import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { loadFromLocalStorage } from '../../utils/localStorage';

import Header from '../../components/Header';

import { Container } from './styles';

function Home() {
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const persistedState = loadFromLocalStorage("cart");
    if (persistedState) {
      setCartProducts(persistedState);
    }
  }, [])
  
  return (
    <>
      <Header itemCount={cartProducts.length} />
      <Container>
        <h1>Olá, seja bem vindo</h1>
        <p>Clique abaixo para navegar pelo nosso catálogo de produtos</p>
        <Link to="/products">
          Ir para catálogo
        </Link>
      </Container>
    </>
    )
}

export default Home;