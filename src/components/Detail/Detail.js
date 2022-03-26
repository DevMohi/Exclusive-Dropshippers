import { faRemove } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Detail = ({ detail }) => {
    const { name, image } = detail;


    return (
        <div className='border mb-2 mx-auto w-50 p-1 shadow p-1  bg-body rounded border-0'>
            <img src={image} height="50px" alt='photos' />
            <p>{name}</p>




        </div>


    );
};

export default Detail;