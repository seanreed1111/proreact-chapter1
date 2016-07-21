import React, {Component} from 'react'

// Parent Component
class GroceryList extends Component{
  render() {
    return (
      <ul>
        <ListItem quantity="1" name="Bread" />
        <ListItem quantity="6" name="Eggs" />
        <ListItem quantity="2" name="Milk" />        
      </ul>
    );
  }
}

//child component
class ListItem extends Component {
  render() {
    return (
      <li>
        {this.props.quantity} x {this.props.name}
      </li>
    );
  }
}

React.render(<GroceryList />, document.getElementById("root"));



// class Hello extends Component {
//   render() {
//     var place = "USA";
//     return (
//       <div>
//       <h1>Hello {place} I'm Here</h1>

//       </div>
//     );
//   }
// }

// React.render(<Hello />, document.getElementById('root'));