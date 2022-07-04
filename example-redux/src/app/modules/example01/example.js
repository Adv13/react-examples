import React from "react";
import { Counter } from '../../components/counter/Counter';

import './example.css';

class Example01 extends React.Component {
  constructor() {
    super();

    this.state = {
    };

  }

  render() {

    return (
      <div className="container py-5">
        <p>redux</p>
        <Counter />

      </div>
    );
  }
}

export default Example01;