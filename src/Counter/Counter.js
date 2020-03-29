import React from "react";
import './Counter.css';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.value
    };
  }
  countDown = () => {
    if(this.state.count > this.props.min){
        let decrement;
            decrement = this.state.count - this.props.step
                this.setState({
                count: decrement
                }
            )
        }
    }
  countUp = () =>{
    if(this.state.count < this.props.max){
        let increment;
            increment = this.state.count + this.props.step
                this.setState({
                count: increment
              }
            )
        }
      }
  render() {
    return (
        <span className="counter-center">
            <span className="decrement" onClick={this.countDown}> - </span>{" "}
                {this.state.count}{" "}
            <span className="increment" onClick={this.countUp}> + </span>
        </span>
    );
  }
}

export default Counter;