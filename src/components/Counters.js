import React, { Component } from "react";

export class Counters extends Component {
  formatCount = () => {
    return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
  };

  getBadgeClasses = () => {
    let classes = "badge m-3 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  };

  render() {
    return (
      <div className="container">
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary m-3"
        >
          Add item
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger mr-3"
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counters;
