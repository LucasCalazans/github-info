import { h } from 'preact';

const Loader = ({ global }) => (
    <div className={`loader-overlay${ global ? ' global' : '' }`}>
        <div className="loader-icon"><div></div><div></div></div>
    </div>
);

// Usage: <Loader global={false|true} />
export default Loader;