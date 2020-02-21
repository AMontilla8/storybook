import React from 'react';
import './Button.css'

const Button = (props) => {
 let classList = '';

 let types = ['primary', 'danger', 'success', 'warning', 'default']

 if (types.includes(props.type)) {
     classList += ` button-${props.type}`
 }
if (props.large) {
    classList += ` button-large`
}

     return <button className={classList} onClick={props.onClick}>
        {props.label}
    </button>

    }

export default Button; 


