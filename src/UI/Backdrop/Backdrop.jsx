import React from 'react';

import './Backdrop.css'
function Backdrop(props) {
    return (
        props.show? <div onClick={props.click} className='backdrop'></div>: null
    );
}

export default Backdrop;