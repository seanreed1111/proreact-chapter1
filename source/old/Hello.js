import React, {Component} from 'react';

class Hello extends Component {
  render() {
    var place = "USA";
    return (
      <div>
        <h1>Hello {place} I'm Here</h1>
      </div>
    );
  }
}
export default Hello;