import React from 'react';
import { render } from 'react-dom';
import { Observable } from 'rxjs'
import * as o from 'rxjs/operators'
import './styles/style.css';
import App from './components/App';

render(<App/>, document.querySelector('#root'));