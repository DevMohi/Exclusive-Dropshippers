import { faRemove } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Detail = ({ detail }) => {
    const { name, image } = detail;
    return (
        <div className='d-flex align-items-center ps-3 pe-3 border border-dark mb-2' >
            <img src={image} height="50px" />
            <h5>{name}</h5>

            <div className='ms-auto'>
                <FontAwesomeIcon icon={faRemove}></FontAwesomeIcon>
            </div>

            
        </div>
    );
};

export default Detail;