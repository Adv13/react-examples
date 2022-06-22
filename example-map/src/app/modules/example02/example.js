import React from "react";
import User from "./user";

class Example02 extends React.Component {

  constructor() {
    super();
    this.state = {

      user: [
        {
          id: 1,
          name: "John",
          company: "John Company",
          description: "John Description"
        },
        {
          id: 2,
          name: "Paul",
          company: "Paul Company",
          description: "Paul Description"
        },
      ]
    };
  }

  render() {
    const user = this.state.user.map((person, index) => {
      return (
        <div sm="4" key={`${person.id}+${index}`}>
          <User key={person.id} person={person} />
        </div>
      );
    });

    return (
      <div className="container py-5">
        <div className="p-5">
          <div>{user}</div>
        </div>
      </div>
    );
  }
}

export default Example02;