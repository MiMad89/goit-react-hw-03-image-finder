import React, { Component } from 'react';

export class LoadMoreButton extends Component {
  handleClick = e => {
    e.preventDefault();
    this.props.onClick(e);
  };

  render() {
    return (
      <button type="button" className="Button" onClick={this.handleClick}>
        Load more
      </button>
    );
  }
}
