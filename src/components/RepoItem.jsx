import { h } from 'preact';
import { StarBadge, Icon } from './Base';

const RepoItem = props => (
    <li className="repo-item">
        <a target="_blank" className="repo-item-name" href={ props.url } native>{ props.name }</a>
        <span className="repo-item-description">{ props.description }</span>
        { props.license ? (
            <span className="repo-item-license">
                <Icon id="license" />
                { props.license.spdx_id || props.license.name }
            </span>
        ) : null }
        <StarBadge stars={ props.stars } className="repo-item-badge" />
    </li>
);

export default RepoItem;