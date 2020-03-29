import React from 'react'
import './Checkbox.css'

const Checkbox = (props) => (
    <>
      <label className={props.boxColor}>
        <input className={props.type} type="checkbox" />{props.label}
        <span class={props.checkStyle}></span>
      </label>
    </>
  );
export default Checkbox;