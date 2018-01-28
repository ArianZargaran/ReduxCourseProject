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
        <h1>Book details:</h1>
        <h2>Title: {this.props.activeBook.title}</h2>
        <h3>description: {this.props.activeBook.description}</h3>
        <h4>* rating: {this.props.activeBook.rating}</h4>
        <h5># pages: {this.props.activeBook.pages}</h5>        
        <h6>price: {this.props.activeBook.price}</h6>
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
