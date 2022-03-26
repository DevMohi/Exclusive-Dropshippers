import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Bag from '../Bag/Bag';
import Detail from '../Detail/Detail';
import './Bags.css'

const Bags = () => {
    const [bags, setBags] = useState([])
    const [details, setDetails] = useState([])

    useEffect(() => {
        fetch('db.json')
            .then(res => res.json())
            .then(data => setBags(data))
    }, [])

    const handleDetailsButton = (bag) => {
        console.log(bag)
        const newBag = [...details, bag]
        setDetails(newBag)
        // const newMeal = [...details, bags];
        // setDetails(newMeal);
    }

    const resetCart = () =>[
        setDetails([])
    ]
    return (
        <div>
            <Row>
                <Col sm={8}>
                    <h1 className='py-2'>All Bags</h1>
                    <div className='parent-bag'>
                        {
                            bags.map(bag => <Bag
                                key={bag.id}
                                bag={bag}
                                handleDetailsButton={handleDetailsButton}
                            ></Bag>)
                        }
                    </div>

                </Col>


                <Col sm={4}>
                    <h3 className='py-3'>Details</h3>

                    <div className='ms-2 me-2'>
                        {
                            details.map(detail => <Detail
                                key={detail.id2}
                                detail={detail}
                            ></Detail>)
                        }
                    </div>

                    <div>
                        <button className='mx-2'>Choose For Me</button> 
                        <button onClick={resetCart}>Reset</button>
                    </div>

                </Col>
            </Row>
        </div>
    );
};

export default Bags;
