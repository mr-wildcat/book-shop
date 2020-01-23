import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { apiUrl } from '../config/default';

export default class BooksList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: []
        };
    }

    componentWillMount() {
        fetch(`${apiUrl}/books`)
            .then(res => res.json())
            .then(res => this.setState({ books: res.books }))
    }

    render() {
        const { books } = this.state;
        return (
            <Fragment>
                <div className="books-wrapper">
                    {
                        books.map(book => <div key={book._id} className="book-wrapper">
                            <Link to={`/book/${book._id}`}>
                                <div className="book-image" style={{backgroundImage: `url(${book.imageUrl})`}}></div>
                                <div className="book-description">
                                    <div>{book.title} - {book.author}</div>
                                </div>
                            </Link>
                        </div>)
                    }
                </div>
            </Fragment>
        );
    }
}
