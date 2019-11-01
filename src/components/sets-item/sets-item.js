import React from 'react';
import './sets-item.css';
import { NavLink } from 'react-router-dom';

const SetsItem = ({ set }) => {
    const { logoUrl, symbolUrl, name, releaseDate, code, standardLegal, expandedLegal } = set;
    return (
        <div className="set">
            <NavLink className="set-link" to={`/set/${code}`}>
                <div className="set-wrapper">
                    <div className="set-logo-wrapper">
                        <img className="set-logo" src={logoUrl} alt={name} />
                    </div>
                    <div className="set-info">
                        <figure className="set-figure">
                            <img className="set-symbol" src={symbolUrl} alt={name} />
                            <figcaption>
                                <p className="set-name">{name}</p>
                                <p className="set-date">Released {releaseDate}</p>
                            </figcaption>
                        </figure>
                        <ul className="set-list">
                            { standardLegal ? <li className="set-list-item">Standart Legal</li> : null }
                            { expandedLegal ? <li className="set-list-item">Expanded Legal</li> : null }
                        </ul> 
                    </div>
                </div>               
            </NavLink>               
        </div>
    )
}

export default SetsItem;