import React from 'react';
import './error-indicator.css';
import { SvgComponent as Psyduck } from '../../svg/psyduck';

const ErrorIndicator = () => {

    return(
        <div className="error-wrapper">
            <div className="error-icon">
                <Psyduck />
            </div>
            <p className="error-text">Something went horribly wrong!</p>
        </div>
    );
}

export default ErrorIndicator;