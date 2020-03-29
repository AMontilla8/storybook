import React from 'react';
import './Select.css'

const Select = (props) => {
    let classList=''

    if (props.outline) {
        classList += ` outline`
    }
    if (props.filled) {
        classList += ` filled`
    }
    if (props.small) {
        classList += ` small`
    }
    if (props.mini) {
        classList += ` mini`
    }
    return <div 
    className={classList}>
          <label>{props.label}</label>
        <select>
            <option>
            </option>
        </select>
    </div>
}

export default Select;