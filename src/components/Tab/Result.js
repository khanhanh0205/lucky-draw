import React from "react";
import trashIcon from "./Trash.png";
export default class Result extends React.Component {
  clearList = () => {
    this.props.onChange();
  };

  render() {
    return (
      <div className="wrap-list-result">
        <ul className="list-result">
          {this.props.winners.map((winner, index) => (
            <li key={index} className="mt-1">
              {winner}
            </li>
          ))}
        </ul>
        <button
          id="clearListButton"
          className="btn btn-primary disableElement"
          onClick={this.clearList}
        >
          <img src={trashIcon} alt="" />
          <span>Clear the list</span>
        </button>
      </div>
    );
  }
}
