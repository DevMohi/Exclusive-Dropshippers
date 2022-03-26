import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Bag = ({ bag }) => {
    const { name, price, image } = bag;

    return (
        <Card className='shadow p-3  bg-body rounded border-0 ' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} height="250px" />
            <Card.Body >
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {price}
                </Card.Text>
                <Button variant="dark">Add To Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></Button>
            </Card.Body>
        </Card>
    );
};

export default Bag;