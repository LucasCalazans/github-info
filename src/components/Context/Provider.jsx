import { h, Component } from 'preact';
import { Provider, initialData } from './SessionContext';

class ProviderAux extends Component {
    constructor(props) {
        super(props);
        this.state = initialData || {};

        this.updateData = this.updateData.bind(this);
    }

    updateData(data) {
        this.setState(data);
    }

    render () {
        return (
            <Provider value={{
                user: this.state.user,
                repoList: this.state.repoList,
                updateData: this.updateData
            }} >
                { this.props.children }
            </Provider>
        );
    }
}

export default ProviderAux;