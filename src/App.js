import { useState } from 'react';
import './App.css';

function App() {

  const [users, setUsers] = useState([]);
  const [showUsers, setShowUsers] = useState(false);
  const [posts, setPosts] = useState([]);
  const [showPosts, setShowPosts] = useState(true);
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState([]);

  const getUsers = async()=> {
    setShowPosts(false)
    setShowComments(false)
    setShowUsers(true)
    try{
    const getUsersResponse = await fetch('https://jsonplaceholder.typicode.com/users', {
    method : "GET"
    })

    const data = await getUsersResponse.json();
    setUsers(data);
  }

    catch(err){
      console.log("error in getting users")
    }
  }

  const getPosts = async() => {
    setShowUsers(false);
    setShowComments(false);
    setShowPosts(true);
    try{
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method : 'GET'
      })

      const data = await response.json();
      setPosts(data);
    }

    catch(err){
      console.log("error in gettingPosts")
    }
  }

  const getComments = async() => {
    setShowUsers(false)
    setShowPosts(false)
    setShowComments(true)
    try{
      const getCommentsResponse = await fetch('https://jsonplaceholder.typicode.com/comments', {
          method: 'GET'
      })

      const data = await getCommentsResponse.json();
      setComments(data);
    }

    catch(err){
      console.log('error in fetching comments')
    }
  }

  return (
    <div className="App">

    <div className="buttons">
      <button onClick={getUsers}>GET Users</button>
      <button onClick={getPosts}>GET Posts</button>
      <button onClick={getComments}>GET Comments</button>
    </div>
    
    <div className='section'>
      

        {showUsers && (
          <div>
            <ul>
              {users.map(user => (
                <li key = {user.id}>
                <pre>{JSON.stringify(user,null,1)}</pre>
                </li>
              ))}
            </ul>
          </div>
          )
        }
      </div>

    <div className='section'>
      { showPosts && (
        <ul>
          {posts.map(post => (
            <li key = {post.id}>
              <pre>{JSON.stringify(post, null, 1)}</pre>
            </li>
          ))}
        </ul>
      )}
    </div>

      <div className='section'>
          {showComments && (
            <ul>
              {comments.map(comment => (
                <li key = {comment.id}>
                  <pre>{JSON.stringify(comment, null, 1)}</pre>
                </li>
              ))}
            </ul>
          )}
      </div>
    </div>
  );
}

export default App;
