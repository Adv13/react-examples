import React from 'react';

import './index.css';

/* class Example extends React.Component {
  
  render() {
    return (
      <div id="example">
        <p>example works!</p>
      </div>
    )
  }
  
}
export default Example;  */


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
      <div>
        <h1>aaaa</h1>
        <h1>props.name {this.props.name}</h1>
        <h1>state.count {this.state.count}</h1>
        <h1>state.name {this.state.name}</h1>
        <p>Vous avez cliqué {this.state.count} fois</p>
        <button onClick={() => this.setState(
          {
            count: this.state.count + 1,
            name: this.props.name
          }
        )}>
          Cliquez ici
        </button>
      </div>
    );
  }
}


export default Example;
