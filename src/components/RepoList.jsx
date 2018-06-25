import { h } from 'preact';
import RepoItem from './RepoItem';
import { Consumer } from './Context/SessionContext';

const RepoList = () => (
    <Consumer>
        {
            ({ repoList }) => {
                return (
                    <ul className="repo-list">
                        { repoList && repoList.map(repo => (
                            <RepoItem name={ repo.name } description={ repo.description } license={ repo.license } stars={ repo.stargazers_count } />
                        )) }
                    </ul>
                )
            }
        }
    </Consumer>
);

export default RepoList;