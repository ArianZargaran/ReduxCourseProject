import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    if (!this.props.activeBook) {
      return (
        <div>
          <hr />
          <p>Select a book to get Started</p>
        </div>
      )
    }

    return (
      <div>
        <hr />
        <h2>Book details:</h2>
        <p>Title: {this.props.activeBook.title}</p>
        <p>Description: {this.props.activeBook.description}</p>
        <p>* rating: {this.props.activeBook.rating}</p>
        <p># pages: {this.props.activeBook.pages}</p>        
        <p>price: {this.props.activeBook.price}</p>
      </div>
    )
  }
};

function mapStateToProps(state) {
  return {
    activeBook: state.activeBook
  }
};

export default connect(mapStateToProps)(BookDetail);
