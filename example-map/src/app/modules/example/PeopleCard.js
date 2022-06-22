import React from "react";
import PropTypes from "prop-types";

class PeopleCard extends React.Component {
  static propTypes = {
    person: PropTypes.object,
    id: PropTypes.number,
    name: PropTypes.string,
    company: PropTypes.string,
    description: PropTypes.string
  };
  render() {
    return (
      <div>
        <div>
          <div>
            <p>{this.props.person.name}</p>
            <p>{this.props.person.company}</p>
            <p>{this.props.person.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default PeopleCard;