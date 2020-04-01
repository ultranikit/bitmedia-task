import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar, MainPage, UsersPage, UserDetails, Footer } from './components';
import './App.scss';
import store from './store';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <Navbar />

                    <Switch>
                        <Route path="/" exact component={MainPage} />
                        <Route path="/users" exact component={UsersPage} />
                        <Route path="/users/:id" exact component={UserDetails} />
                    </Switch>

                    <Footer />
                </div>
            </Router>
        </Provider>
    );
};

export default App;
