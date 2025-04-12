function CommentList({comments}) {
    return(
            <ul>
              {comments.map(comment => (
                <li key = {comment.id}>
                  <pre>{JSON.stringify(comment, null, 1)}</pre>
                </li>
              ))}
            </ul>
    )}


export default CommentList;