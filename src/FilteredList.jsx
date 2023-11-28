import React, { Component } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import List from './List';

class FilteredList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      type: ""
    };
  }

  onSearch = (event) => {
    this.setState({ search: event.target.value.trim().toLowerCase() });
  }

  filterItem = (item) => {
    const isTypeMatch = this.state.type === "all" || item.type.toLowerCase() === this.state.type.toLowerCase();
    const isSearchMatch = item.name.toLowerCase().search(this.state.search) !== -1;

    return isTypeMatch && isSearchMatch;
  }

  handleTypeSelect = (eventKey, event) => {
    this.setState({ type: eventKey });
  }

  render() {
    return (
      <div className="filter-list">
        <h1>Produce Search</h1>
        <DropdownButton id="typeDropdown" title={"Type"} onSelect={this.handleTypeSelect}>
          <Dropdown.Item eventKey="all">All</Dropdown.Item>
          <Dropdown.Item eventKey="fruit">Fruit</Dropdown.Item>
          <Dropdown.Item eventKey="vegetable">Vegetable</Dropdown.Item>
          {/* Add more menu items as needed */}
        </DropdownButton>
        <input type="text" placeholder="Search" onChange={this.onSearch} />
        <List items={this.props.items.filter(this.filterItem)} />
      </div>
    );
  }
}

export default FilteredList;

