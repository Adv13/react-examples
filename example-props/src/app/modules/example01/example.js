import React from "react";

import './example.css';

import Component01 from './component01';
import Component02 from './component02';
import Component03 from './component03';
import Component04 from './component04';

class Example01 extends React.Component {

  constructor() {
    super();

    this.state = {
    };

  }

  render() {

    return (
      <div className="container py-5">
        <p>example01</p>
        <Component01></Component01>
        <Component02></Component02>
        <Component03 name="component03-name"></Component03>
        <Component04 name="component04-name"></Component04>
      </div>
    );
  }
}

export default Example01;