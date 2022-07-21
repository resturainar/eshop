import React from 'react';
import { Row, Col } from 'react-bootstrap';
import CardItem from './CardItem';

const dummyProducts = [
    {
        id: 0,
        title: "Produk A",
        price: 20000,
        description: "Lorem ipsum",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKeuHtMxQvDIEqy481vCqH5RwCHbng8l2OgbJM_8yEvmsBShlUxGkqJHYpul0POmMf7MQ&usqp=CAU",
    },
    {
        id: 1,
        title: "Produk B",
        price: 30000,
        description: "Lorem ipsum",
        image: "https://lavergne.id/wp-content/uploads/2021/08/Celine-Micro-Belt-Bag.jpg",
    }, 
    {
        id: 2,
        title: "Produk C",
        price: 40000,
        description: "Lorem ipsum",
        image: "https://img.priceza.co.id/img1/37/0244/37-20190520030209-19369429607627990.jpg",
    },
];

function CardList() {
    return (
        <Row xs={1} xl={4} sm={2} lg={3} md={3}>
        {dummyProducts.map((product) => (
            <Col key={product.id}>
        <CardItem item={product}/>
            </Col>
        ))}
        </Row>
    )
    }

export default CardList;