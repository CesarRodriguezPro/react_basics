//1. Create a new React app.
import React from 'react';
import ReactDOM from 'react-dom';
import Heading from './heading';
import Note from './note'
import Footer from './footer';


var app = <div>
{Heading()}
{Note()}
{Footer()}
</div>

ReactDOM.render(app,document.getElementById('root') );

