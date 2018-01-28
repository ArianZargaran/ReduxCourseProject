import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectBook } from '../actions/index';

import '../style/book-list.css';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <a
          key={book.title}
          className='list-group-item'
          onClick={() => { this.props.selectBook(book) }}
        >
          <li className="list-group-item">{book.title}</li>
        </a>
      )
    })
  }

  render() {
    return (
      <ul className="list-group col-sm-4">{this.renderList()}</ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    books: state.books
  }
};

function mapDispacthToProps(dispatch) {
  return bindActionCreators({ selectBook }, dispatch)
};

export default connect(mapStateToProps, mapDispacthToProps)(BookList);