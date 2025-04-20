import React, { Component } from 'react';

/*
  The List component will take the list of items passed in as a property (props)
  and create an HTML list (<ul>) of them using map.
*/
class List extends Component {
  renderList() {
    const items = this.props.items.map(item => {
      return <li key={item.name}>{item.name}</li>;
    });
    return items;
  }

  render() {
    return (
      <ul>
        {this.renderList()}
      </ul>
    );
  }
}

export default List;
