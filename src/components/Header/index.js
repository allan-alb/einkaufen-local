import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '@material-ui/core';
import { MdShoppingCart } from 'react-icons/md';
import { FaRegListAlt, FaListAlt } from 'react-icons/fa';

import { loadFromLocalStorage } from '../../utils/localStorage';

import { Container, Logo, LogoImg, LogoText, Cart } from './styles';

import logo from '../../assets/images/logo.png';

export default function Header({ itemCount }) {
  /*const [itemCount, setItemCount] = useState(0);
    // const itemCount = useSelector(state => state.cart.length);
    useEffect(() => {
      let storedItems = loadFromLocalStorage();
      setItemCount(storedItems.length);
    }, [])*/

    return (
      <Container>
        <Link to="/products">
          <FaListAlt color="#ddd" size={22} />
        </Link>
        <Link to="/">
          <Logo>
            <LogoImg src={logo} />
            <LogoText>Einkaufen</LogoText>
          </Logo>
        </Link>
        <Cart>
          <Link to="/cart">
            <Badge badgeContent={itemCount} color="primary">
              <MdShoppingCart color="#ddd" size={22} />
            </Badge>
          </Link>
          <Link to="/orders">
            <FaRegListAlt color="#ddd" size={22} />
          </Link>
        </Cart>
      </Container>
    )
}