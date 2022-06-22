import React from "react";
import PeopleCard from "./PeopleCard";

class Example extends React.Component {
  constructor() {
    super();
    this.state = {
      people: [
        {
          id: 1,
          name: "John",
          company: "Some Company, Inc",
          description: "Met at a party."
        },
        {
          id: 2,
          name: "Mary",
          company: "Some Company, Inc",
          description: "Met at a party."
        },
        {
          id: 3,
          name: "Jane",
          company: "Some Company, Inc",
          description: "Met at a party."
        }
      ]
    };
  }

  render() {
    let peopleCard = this.state.people.map((person, index) => {
      return (
        <div sm="4" key={`${person.id}+${index}`}>
          <PeopleCard key={person.id} person={person} />
        </div>
      );
    });
    return (
      <div>
        <div>{peopleCard}</div>
      </div>
    );
  }
}

export default Example;