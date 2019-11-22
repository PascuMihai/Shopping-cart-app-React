import React from "react";

function Header(props) {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href='/'>
          Shopping Cart <span>{props.counters}</span>
        </a>
      </nav>
      <div className="container">
        <button onClick={props.onReset} className="badge badge-primary mr-3">
          Reset
        </button>
        <button onClick={props.onAddItem} className="badge badge-primary">
          Add item
        </button>
      </div>
    </div>
  );
}

export default Header;
