import React from 'react';
import './spinner.css';
import { SvgComponent as Pokeball } from '../../svg/pokeball';

const Spinner = () => {
    return (
        <div className="spinner-wrapper container">
            <div className="spinner">
                <span className="spinner-dot-1"></span>
                <span className="spinner-dot-2"></span>
                <Pokeball />
            </div>
        </div>
    );
}

export default Spinner;