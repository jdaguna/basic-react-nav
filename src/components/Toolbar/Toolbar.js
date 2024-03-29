import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Toolbar.css';

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div></div>
            <div className="toolbar__logo"><a href="/">A ONE IMPORTS</a></div>
            <div className="spacer"/>
            <div className="toolbar__navigation-items">
                <ul>
                    <li>
                        <div className="dropdown">
                            <button className="dropbtn">Shop
                                {/* <FontAwesomeIcon className="search-icon"icon={faSearch} /> */}
                            </button>
                             <div className="dropdown-content">
                                <a href="/">Wedding Rings</a>
                                <a href="/">Earrings</a>
                                <a href="/">Diamonds</a>
                            </div>
                        </div> 
                    </li>
                    <li><a href="/">Engagement Rings</a></li>
                    <li><a href="/">We Buy Gold</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/" className="search"><FontAwesomeIcon className="search-icon"icon={faSearch} /></a></li>
                    <li><a href="/" className="search"><FontAwesomeIcon className="search-icon"icon={faShoppingCart} /></a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;