import { useContext} from 'react'
import Spinner from '../layout/Spinner'
import UserItem from './UserItem'
import GithubContext from '../../context/github/GitHubContext'

function UserResults() {
    
    const { users, loading} = useContext(GithubContext)

    if(!loading) {
        return (
            <div className="grid grid-col-1 gap-8 xl:grid-cols-4 grid-cols-3 md:grid-cols-2">
            {users.map((user) => (
                 <UserItem key={user.id} user={user}></UserItem>
            ))}
            </div>
         )
    } else {
        return <Spinner/>
    }
    
}

export default UserResults
