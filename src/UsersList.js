function UsersList({users}) {
    return(
        <ul>
              {users.map(user => (
                <li key = {user.id}>
                <pre>{JSON.stringify(user,null,1)}</pre>
                </li>
              ))}
            </ul>
    )}

export default UsersList;