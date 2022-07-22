import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { MdDelete } from 'react-icons/md';
import { getPrice } from '../Utils';

function CartItem({item}) {
    return (
        <Card className='p-3 mt-3'>
            <Row>
                    <Col className='col-1'>
                        <Card.Img src={item.image} />
                    </Col>
                    <Col className= 'col-10'>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Subtitle>{getPrice(item.price)}</Card.Subtitle>
                        <Card.Text>qty : {item.quantity}</Card.Text>
                    </Col>
                    <Col className='col-1 d-flex justify-content-center align-items-center'>
                        <Button>
                        <MdDelete />
                        </Button>
                    </Col>
            </Row>
        </Card>
    );
}

export default CartItem;