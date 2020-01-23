import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BooksList from './components/BooksList';
import BookItem from './components/BookItem';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={BooksList} />
                <Route exact path="/book/:id" component={BookItem} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
