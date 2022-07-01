import React from "react";

import './example.css';

class Example01 extends React.Component {
  constructor() {
    super();

    this.state = {
    };

  }

  render() {

    const style02 = {
      color: "red",
      padding: "10px",
    };

    const classname04 = "class04";

    return (
      <div className="container py-5">
        <p>paragraph01</p>
        <p style={{color: "red"}}>paragraph02 method 1</p>
        <h1 style={style02}>paragraph02 method 2</h1>
        <p id="class03">paragraph03</p>
        <p className={classname04}>paragraph04</p>
        <p className="class05">paragraph05</p>
      </div>
    );
  }
}

export default Example01;