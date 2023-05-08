import React from 'react';
import './App.css';
import './responsive.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from './components/screens/HomeScreen';
import Login from './screens/Login';
import Register from './screens/Register';
import NotFound from './components/screens/NotFound';
import SingleProduct from './screens/SingleProduct';
import Single from './screens/Single';
import CartScreen from './screens/CartScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={HomeScreen} exact />
        <Route path='/search/:keyword' component={HomeScreen} exact />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/products/:id' component={Single} />
        <Route path='/cart/:id?' component={CartScreen} />
        <Route path='/profile' component={ProfileScreen} />
        <Route path='/shipping' component={ShippingScreen} />
        <Route path='/payment' component={PaymentScreen} />
        <Route path='/contact' component={Contact} />
        <Route path='*' component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
