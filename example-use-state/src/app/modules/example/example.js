import React from 'react';

import './example.css';

class Example extends React.Component {
  constructor(props) {
    super(props);

    console.log('00000000001:Example:constructor');
    console.log('00000000002:Example:constructor' + JSON.stringify(props));

    this.state = {
      count: 0,
      name: 'default'
    };
  }

  render() {
    return (
      <div className="p-5">
        <p>props.name : {this.props.name}</p>
        <p>state.count : {this.state.count}</p>
        <p>state.name : {this.state.name}</p>
        <p>click number : {this.state.count}</p>
        <button onClick={() => this.setState(
          {
            count: this.state.count + 1,
            name: this.props.name
          }
        )}>
          Click
        </button>
      </div>
    );
  }
}

export default Example;
