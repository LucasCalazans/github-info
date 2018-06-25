import { h } from 'preact';
import RepoList from '../RepoList';
import { Loader } from '../Base';

const SearchPageView = ({ user, changeUser, search, isLoading }) => (
    <div className="search-page">
        <form className="search-form" onSubmit={ search }>
            <input type="text" placeholder="Type a user to stalk (Press enter)" className="search-field" value={ user } onInput={ changeUser } />
        </form>
        <RepoList />
        { !isLoading ? null : <Loader global={ true } /> }
    </div>
);

export default SearchPageView;