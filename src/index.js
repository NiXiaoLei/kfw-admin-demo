/*
 * @Author: nxl 
 * @Date: 2018-09-20 16:20:27 
 * @Last Modified by:   nxl 
 * @Last Modified time: 2018-09-20 16:20:27 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './style.js';
import MyRoute from './route';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MyRoute />, document.getElementById('root'));
registerServiceWorker();
