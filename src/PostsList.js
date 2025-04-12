function PostList({posts}) {
    return (
        <ul>
          {posts.map(post => (
            <li key = {post.id}>
              <pre>{JSON.stringify(post, null, 1)}</pre>
            </li>
          ))}
        </ul>
    )}

export default PostList;