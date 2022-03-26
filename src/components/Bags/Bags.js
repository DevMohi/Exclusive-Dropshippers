import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Bag from '../Bag/Bag';
import './Bags.css'

const Bags = () => {
    const [bags, setBags] = useState([])
    useEffect(() => {
        fetch('db.json')
            .then(res => res.json())
            .then(data => setBags(data))
    }, [])
    return (
        <div>
            <Container>
                <Row>
                    <Col sm={9}>
                        <h1 className='py-2'>All Bags</h1>
                        <div className='parent-bag'>
                            {
                                bags.map(bag => <Bag
                                    key = {bag.id}
                                    bag = {bag}
                                ></Bag>)
                            }
                        </div>

                    </Col>


                    <Col sm={3}>Selected Details</Col>
                </Row>
            </Container>
        </div>
    );
};

export default Bags;