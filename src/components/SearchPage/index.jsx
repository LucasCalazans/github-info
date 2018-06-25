import SearchPageView from './view';
import { h, Component } from 'preact';
import { Consumer } from '../Context/SessionContext';

class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: 'lucascalazans',
            isLoading: false
        };

        this.search = this.search.bind(this);
        this.changeUser = this.changeUser.bind(this);
    }

    async search(ev) {
        ev.preventDefault();
        const user = this.state.user;
        if(!user) return;

        this.setState({ isLoading: true });
        try {
            const request = await fetch(`https://api.github.com/users/${this.state.user}/repos`);
            if(request.ok) {
                const response = await request.json();
                this.contextData.updateData({ user: this.state.user, repoList: response });
            } else {
                console.log("TODO User not found");
                //TODO User not found
            }
        } catch(err) {
            console.log("TODO Connection error");
            //TODO Connection error
        }
        this.setState({ isLoading: false });
    }

    changeUser(ev) {
        this.setState({ user: ev.target.value });
    }

    render() {
        return (
            <Consumer>
                {
                    contextData => {
                        this.contextData = contextData;
                        return <SearchPageView isLoading={ this.state.isLoading } user={ this.state.user } changeUser={ this.changeUser } search={ this.search } />
                    }
                }
            </Consumer>
        );
    }
}

export default SearchPage;