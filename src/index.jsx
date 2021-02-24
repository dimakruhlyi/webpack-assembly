import * as $ from 'jquery';
import React from 'react';
import {render} from 'react-dom';
import Post from '@models/Post';
import './styles/styles.css';
import './styles/test.less';
import './styles/test2.scss';
// import xml from './assets/data.xml';
// import csv from './assets/data.csv';
// import json from './assets/json';
import WebpackLogo from './assets/webpack-logo.png';
import './babel';

const App = () => (
    <div className="container">
        <h1>w</h1>
        <hr />
        <div className="logo"></div>
        <hr />
        <pre></pre>
        <hr />
        <div className="box">
            <h2>Less</h2>
        </div>
        <hr />
        <div className="card">
            <h2>SCSS</h2>
        </div>
    </div>
);

const post = new Post('Webpack post title', WebpackLogo);
$('pre').addClass('code').html(post.toString());

render(<App />, document.getElementById('app'));

// console.log('JSON: ', json);
// console.log('XML: ', xml);
// console.log('CSV: ', csv);