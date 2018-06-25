import { h } from 'preact';

const SearchPageView = ({ user, changeUser }) => (
    <div className="search-page">
        <form className="search-form">
            <input type="text" placeholder="Type a user to stalk (Press enter)" className="search-field" value={ user } onInput={ changeUser } />
        </form>
    </div>
);

export default SearchPageView;