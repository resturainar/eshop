import React from 'react';
import { Container } from 'react-bootstrap';
import CartItem from '../components/CartItem';
import { Navigate } from 'react-router-dom';

const dummyProducts = [
    {
        id: 0,
        title: "Produk A",
        price: 20000,
        description: "Lorem ipsum",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKeuHtMxQvDIEqy481vCqH5RwCHbng8l2OgbJM_8yEvmsBShlUxGkqJHYpul0POmMf7MQ&usqp=CAU",
        quantity: 20,
    },
    {
        id: 1,
        title: "Produk B",
        price: 30000,
        description: "Lorem ipsum",
        image: "https://lavergne.id/wp-content/uploads/2021/08/Celine-Micro-Belt-Bag.jpg",
        quantity: 25,
    }, 
    {
        id: 2,
        title: "Produk C",
        price: 40000,
        description: "Lorem ipsum",
        image: "https://img.priceza.co.id/img1/37/0244/37-20190520030209-19369429607627990.jpg",
        quantity: 45,
    },
];

function Carts({isLogedIn}) {

    if(!isLogedIn) {
        return(
            <Navigate to='/auth/login' replace />
        )
    }

    return (
       <Container>
         {dummyProducts.map((product) => (
            <CartItem key={product.id} item={product} />
         ))}
       </Container>
);
}

export default Carts;