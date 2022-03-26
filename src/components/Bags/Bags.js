
import React, { useEffect, useState } from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';
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

        const newBag = [...details, bag]
        console.log(newBag)
        if (newBag.length <= 4) {
            setDetails(newBag)
        }
        document.getElementById('random-container').style.display = 'block'
    }



    const randomPicker = (details) => {
        console.log(details)
        const arr = [];
        let randomNumber;

        for (const detail of details) {
            arr.push(parseInt(detail.id))

            randomNumber = arr[Math.floor(Math.random() * arr.length)]

            if (randomNumber === parseInt(detail.id)) {
                console.log(detail)
                setDetails([detail])
            }
        }
    }


    const resetCart = () => [
        setDetails([]),
        document.getElementById('random-container').style.display = 'none'


    ]
    return (
        <div >
            <Row className='parent-container'>
                <Col sm={8}>
                    <h2 className='py-2'>Exclusive</h2>
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

                    <h3 className='py-2'>Details</h3>
                    <div className='py-5'>
                        {
                            details.map(detail =>
                                <Detail
                                    key={detail.id}
                                    detail={detail}
                                ></Detail>
                            )
                        }
                    </div>

                    <div id='random-container' className='pb-3' style={{ display: 'none' }}>
                        <button className='border bg-dark p-2 rounded mx-2 text-white' onClick={() => randomPicker(details)}>Choose For Me</button>
                        <button className='border bg-dark p-2 rounded text-white ' onClick={resetCart}>Choose Again</button>
                    </div>


                </Col>
            </Row>

            <Container className='my-5 px-4 '>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>How React Works?</Accordion.Header>
                        <Accordion.Body>
                            <p>
                                React, at its heart, essentially maintains a tree for you. On the nodes, this tree can perform efficient diff computations.
                                Consider your HTML code to be a tree. That is, in fact, how the browser handles your DOM (your rendered HTML on the browser). React allows you to essentially re-construct your DOM in JavaScript and only push the changes that have actually occurred to the DOM.
                                React uses Virtual DOM to speed up the development of web apps. Instead of updating all of the components again, as traditional web applications do, Virtual DOM examines the components' prior states and updates only the objects in the Real DOM that have changed.
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item >
                        <Accordion.Header>Props Vs State</Accordion.Header>
                        <Accordion.Body>
                            <p>Props are immutable . Props are used to pass data from one component to another. Props are read only .It can be used with state and functional components. Coming to State, the data is passed within the component only. It is mutable. State is both read and write, also state can be used only within the state components.</p>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                        <Accordion.Header>How Use State Works?</Accordion.Header>
                        <Accordion.Body className='text-left'>
                            useState is a Hook(function) that allows you to have state variables in functional components. You pass the initital state to this function and it returns a variable with the current state value and also another function to update this value.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </div>
    );
};



export default Bags;

