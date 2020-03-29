import React from 'react'
import './Forms.css'

const Forms = (props) => {
    let classList = ''
    let header = ''

    if (props.header) {
        header += ` input.header`
    }
    if (props.medium) {
        classList += ` input-medium`
    }
    if (props.large) {
        classList += ` input-large`
    }
    if (props.voucher) {
        classList += ` input-voucher`
    }
    return <div>
      <div className={header}>
        {props.label}
      </div>
      <div>    
        <input className={classList}
          placeholder={props.placeholder}>
        </input>
      </div>
    </div>
}

export default Forms;