import React from 'react'
import "./Forms.css"
import Button from "../Buttons/Button"

class Forms extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        inputValue: "",
        counter: 0,
        voucher: "",
        clicked: false
        };
    }
}



export default Forms;