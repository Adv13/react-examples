import React from "react";

class Example01 extends React.Component {
  constructor() {
    super();

    this.state = {
      people: [
        {
          id: 1,
          name: "John"
        },
        {
          id: 2,
          name: "Paul"
        }
      ]
    };

  }

  render() {

    const toto = this.state.people.map((person, index) => {
      return (
        <div key={`${person.id}+${index}`}>
          {person.id}:{person.name}
        </div>
      );
    });


    const user = "Tony stark";
    const userJson = { name: "Tony stark", nickname: "Iron Man" };
    const userMap = [
      { name: "Tony stark", nickname: "Iron Man" },
      { name: "Peter Parker", nickname: "Spiderman" }
    ];

    return (
      <div className="container py-5">
        <div>
          <p>user:{user}</p>
        </div>
        <div>
          <p>userJson:name{userJson.name}</p>
          <p>userJson:nickname{userJson.nickname}</p>
        </div>
        <div>
          <p>userMap:name{userMap[0].name}</p>
          <p>userMap:nickname{userMap[0].nickname}</p>
          <p>userMap:name{userMap[1].name}</p>
          <p>userMap:nickname{userMap[1].nickname}</p>
        </div>
        <div>
          {toto}
        </div>
      </div>
    );
  }
}

export default Example01;