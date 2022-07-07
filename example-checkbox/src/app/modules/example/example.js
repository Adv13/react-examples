import React from 'react';

import './example.css';

class Example extends React.Component {
  render() {
    return (
      <div className="container py-5">


        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
        <label htmlFor="vehicle1"> Value 01</label><br />
        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
        <label htmlFor="vehicle2"> Value 02</label><br />
        <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" defaultChecked />
        <label htmlFor="vehicle3"> Value 03</label><br></br>


        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Default checkbox
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" defaultChecked />
          <label className="form-check-label" htmlFor="flexCheckChecked">
            Checked checkbox
          </label>
        </div>

      </div>
    )
  }
}

export default Example;
