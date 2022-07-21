import React from 'react';
import { Card, Badge, Button } from 'react-bootstrap';
import { MdShoppingCart } from 'react-icons/md';
import { getPrice } from '../Utils';

const imageStyle = {
    width: '100%',
    objecFit: 'contain',
    padding: 5,
    maxHeight: 200,
    minHeight: 100,
};

function CardItem({item}) {
    return(
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
         {item.description}
        </Card.Text>
        <div className= 'd-Flex justify-content-between align-items-center'>
            <h6>
                <Badge bg ='secondary'>{getPrice(item.price)}</Badge>
            </h6>
            <Button>
                <MdShoppingCart/>
            </Button>
        </div>
      </Card.Body>
    </Card>
    );


}

export default CardItem;