import { h } from 'preact';
import UserPage from './UserPage';
import SearchPage from './SearchPage';
import { Router } from 'preact-router';

const App = () => (
    <div className="app">
        <Router>
            <SearchPage path="/" />
            <UserPage path="/user/:user" />
        </Router>
    </div>
);

export default App;