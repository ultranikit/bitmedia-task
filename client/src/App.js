import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import { Navbar, MainPage } from './components/';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Navbar />

                <Switch>
                    <Route to="/" component={MainPage} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
