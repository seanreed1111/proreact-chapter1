import React, {Component} from 'react';
import Checklist from './Checklist';

class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="card_title">{this.props.title}</div>
        <div className="card_details">
          {this.props.description}
          <Checklist cardID={this.props.id} tasks={this.props.tasks} />
        </div>
      </div>
    );
  }
}
export default Card;