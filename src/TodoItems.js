import React, { Component } from "react";

class TodoItems extends Component {
  constructor(props) {
    super(props);
    this.createTasks = this.createTasks.bind(this);
  }
  createTasks(item) {
    return (
      <li
        style={{ display: "flex", justifyContent: "space-between" }}
        onClick={() => this.delete(item.key)}
        key={item.key}
      >
        <p>{item.text}</p> <p>{this.formatTime(item.key)}</p>{" "}
      </li>
    );
  }
  formatTime(timestamp) {
    // Convert timestamp to Date object
    const dateObject = new Date(timestamp);

    // Choose your desired time format (replace with preferred format):
    const options = {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true, // Use 12-hour format (optional)
    };
    const formattedTime = dateObject.toLocaleTimeString('en-US', options); // Format time

    return formattedTime;
  }
  delete(key) {
    this.props.delete(key);
  }
  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);

    return <ul className="theList">{listItems}</ul>;
  }
}

export default TodoItems;
