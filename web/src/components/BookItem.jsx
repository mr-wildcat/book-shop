import React, { Component } from 'react';
import { apiUrl } from '../config/default';

export default class BookItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            book: {}
        };
    }

    componentWillMount() {
        const { id } = this.props.match.params;

        fetch(`${apiUrl}/books/${id}`)
            .then(res => res.json())
            .then(res => this.setState({ book: res.book }))
    }

    render() {
        const { title, author, description, imageUrl } = this.state.book;
        return (
            <div className="book-wrapper">
                <div className="book-image" style={{backgroundImage: `url(${imageUrl})`}}></div>
                <div className="book-description">
                    <div>Title: {title}</div>
                    <div>Author: {author}</div>
                    <div>Description: {description}</div>
                </div>
            </div>
        );
    }
}
