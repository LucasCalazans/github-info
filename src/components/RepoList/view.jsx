import { h } from 'preact';
import RepoItem from '../RepoItem';
import { Loader } from '../Base';

const RepoListView = props => (
    <div className="repo-list-container">
        <ul className="repo-list">
            <RepoItem name="Repository" description="Description" license="License" stars={ 12000 } />
        </ul>
        <Loader />
    </div>
);

export default RepoListView;