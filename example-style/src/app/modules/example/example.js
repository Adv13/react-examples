import React from 'react';

import './example.css';

class Example extends React.Component {

  render() {

    const divStyle = {
      color: 'red',
    };

    const divStyle2 = {
      color: 'blue',
      fontWeight: 'bold'
    };

    return (
      <div className="container py-5">
        <p className="text-center">example works!</p>
        <p>paragraph</p>
        <p style={divStyle}>red paragraph</p>
        <p style={divStyle2}>blue and bold paragraph</p>
      </div>
    )
  }
}

export default Example;
