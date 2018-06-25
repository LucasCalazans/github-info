import { h } from 'preact';
import UserPage from './UserPage';
import SearchPage from './SearchPage';
import { Router } from 'preact-router';
import Provider from './Context/Provider';

const App = () => (
    <div className="app">
        <Provider>
            <Router>
                <SearchPage path="/" />
                <UserPage path="/user/:user" />
            </Router>
        </Provider>
    </div>
);

export default App;