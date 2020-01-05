import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import './Demo.css';
const Demo = ({Name})=>{
     
        return <div className="maindiv_style">
            <h1>Hello {Name}</h1>
            <p>welcome</p>
        </div>
    
}

export default Demo;
