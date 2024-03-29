import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import CartItem from '../components/CartItem';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import { getPrice } from '../Utils';

function Carts({isLoggedIn}) {
    const [carts,setCarts] = useState([]);
    const [subTotal, setSubTotal] = useState(0);
    const [hasFetched, setHasFetched] = useState(false);
    const token = localStorage.getItem('eshop_jwt');


    useEffect(() => {
        if (!hasFetched) {
          axios.get(`https://eshop.reskimulud.my.id/carts`, {
            headers: {
              'Authorization': `Bearer ${token}`,
            },
          }).then(res => {
            console.log('fetched');
            setCarts(res.data.data.cart);
            setSubTotal(res.data.data.subTotal);
          })
          setHasFetched(true);
        }
      }, [token, hasFetched]);

    if (!isLoggedIn) {
    return <Navigate to='/auth/login' replace />
  }

  return (
    <Container>
      <h1>Keranjang</h1>
      <h5>Subtotal : {getPrice(subTotal)}</h5>
      {carts.map((cart) => (
        <CartItem setHasFetched={setHasFetched} item={cart} />
      ))}
    </Container>
  );
}

export default Carts;