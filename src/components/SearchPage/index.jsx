import SearchPageView from './view';
import { h, Component } from 'preact';

class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: ''
        };

        this.changeUser = this.changeUser.bind(this);
    }

    changeUser(ev) {
        this.setState({ user: ev.target.value });
    }

    render() {
        return <SearchPageView user={ this.state.user } changeUser={ this.changeUser } />
    }
}

export default SearchPage;