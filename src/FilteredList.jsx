import React, { Component } from 'react';
import List from './List';
import { DropdownButton, Dropdown } from 'react-bootstrap'; // Bootstrap components

class FilteredList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      filterType: "all"
    };
  }

  onSearch = (event) => {
    this.setState({ search: event.target.value.trim().toLowerCase() });
  };

  handleSelect = (eventKey) => {
    this.setState({ filterType: eventKey });
  };

  filterItem = (item) => {
    const matchesSearch = item.name.toLowerCase().includes(this.state.search);
    const matchesType = this.state.filterType === "all" || item.type.toLowerCase() === this.state.filterType;
    return matchesSearch && matchesType;
  };

  render() {
    return (
      <div className="filter-list">
        <h1>Produce Search</h1>

        <DropdownButton
          id="dropdown-basic-button"
          title={this.state.filterType.charAt(0).toUpperCase() + this.state.filterType.slice(1)}
          onSelect={this.handleSelect}
        >
          <Dropdown.Item eventKey="all">All</Dropdown.Item>
          <Dropdown.Item eventKey="fruit">Fruit</Dropdown.Item>
          <Dropdown.Item eventKey="vegetable">Vegetable</Dropdown.Item>
        </DropdownButton>

        <input type="text" placeholder="Search" onChange={this.onSearch} />

        <List items={this.props.items.filter(this.filterItem)} />
      </div>
    );
  }
}

export default FilteredList;
