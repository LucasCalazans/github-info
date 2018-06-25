import { h, Component } from 'preact';

class UserPage extends Component {
    render() {
        return (
            <div>
                UserPage - { this.props.user }
            </div>
        )
    }
}

export default UserPage;