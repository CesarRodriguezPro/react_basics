import React from 'react';
import ReactDOM from 'react-dom';

export default Footer;

var currentYear =  new Date();
function Footer(){
    return <div>
    <footer>
        <h1>copyright {currentYear.getFullYear()} </h1>
    </footer>
    </div>
}