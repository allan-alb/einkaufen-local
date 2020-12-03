import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import ProductList from '../pages/ProductList';
import Cart from '../pages/Cart';
import ConfirmOrder from '../pages/ConfirmOrder';
import ViewOrders from '../pages/ViewOrders';

function Routes() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" component={ProductList} />
        <Route path="/cart" component={Cart} />
        <Route path="/confirm" component={ConfirmOrder} />
        <Route path="/orders" component={ViewOrders} />
      </Switch>
    )
}

export default Routes;