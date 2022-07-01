import React from "react";

class Component04 extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <p>component04</p>
        <p>Component04.props.name : {this.props.name}</p>
      </div>
    );

  }
}

export default Component04;