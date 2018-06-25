import { h } from 'preact';
import RepoList from '../RepoList';

const SearchPageView = ({ user, changeUser }) => (
    <div className="search-page">
        <form className="search-form">
            <input type="text" placeholder="Type a user to stalk (Press enter)" className="search-field" value={ user } onInput={ changeUser } />
        </form>
        <RepoList />
    </div>
);

export default SearchPageView;