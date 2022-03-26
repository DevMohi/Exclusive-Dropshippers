
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Bag from '../Bag/Bag';
import Detail from '../Detail/Detail';
import './Bags.css'

const Bags = () => {
    const [bags, setBags] = useState([])
    const [details, setDetails] = useState([])



    // const [random, setRandom] = useState([]) 


    useEffect(() => {
        fetch('db.json')
            .then(res => res.json())
            .then(data => setBags(data))
    }, [])

    const handleDetailsButton = (bag) => {
        
        const newBag = [...details, bag]
        console.log(newBag)
        if(newBag.length<=4){
            setDetails(newBag)
        }
        document.getElementById('random-container').style.display = 'block'

        // const newMeal = [...details, bags];
        // setDetails(newMeal);
    }



    const randomPicker = (details) => {
        console.log(details)
        const arr = [];
        let randomNumber;

        for (const detail of details) {
            arr.push(parseInt(detail.id))
            // const { name } = detail 

            // const numbers = [1,2,3,4,5,6,7,8,9,10,11,12]
            randomNumber = arr[Math.floor(Math.random() * arr.length)]

            if (randomNumber === parseInt(detail.id)) {
                console.log(detail)
                setDetails([detail]) 
                document.getElementById('result').style.display = 'block'

            }
        }


    }

    // console.log(random) 

    const resetCart = () => [
        setDetails([]),
        document.getElementById('result').style.display = 'none'
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
                            details.map(detail =>
                                <Detail
                                    key={detail.id}
                                    detail={detail}
                                ></Detail>
                            )
                        }
                    </div>

                    <div id='random-container' className='mx-auto' style={{ display: 'none' }}>
                        <button className='border bg-dark p-2 mx-2 text-white' onClick={() => randomPicker(details)}>Choose For Me</button>
                        <button className='border bg-danger p-2 text-white' onClick={resetCart}>Choose Again</button>
                    </div>


                </Col>
            </Row>
        </div>
    );
};



export default Bags;

