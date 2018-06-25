import { h } from 'preact';
import RepoItem from '../RepoItem';

const RepoListView = props => (
    <ul className="repo-list">
        <RepoItem name="Repository" description="Description" license="License" stars={ 12000 } />
    </ul>
);

export default RepoListView;