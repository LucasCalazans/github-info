import { h } from 'preact';
import { StarBadge, Icon } from './Base';

const RepoItem = props => (
    <li className="repo-item">
        <span className="repo-item-name">{ props.name }</span>
        <span className="repo-item-description">{ props.description }</span>
        <span className="repo-item-license">
            <Icon id="license" />
            { props.license }
        </span>
        <StarBadge stars={ props.stars } className="repo-item-badge" />
    </li>
);

export default RepoItem;