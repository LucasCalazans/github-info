import { h } from 'preact';
import { Icon } from './index';

const StarBadge = ({ stars }) => (
    <div className="star-badge-container">
        <div className="star-badge-wrapper">
            <Icon id="star" className="star-badge-icon" />
            <span className="star-badge-text">stars</span>
        </div>
        <span className="star-badge-text">{ stars }</span>
    </div>
);

// Usage: <StarBadge stars="20" />
export default StarBadge;