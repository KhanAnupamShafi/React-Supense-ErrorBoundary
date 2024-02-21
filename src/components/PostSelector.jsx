import fetchPosts from '../api/fetchPosts';
const resource = fetchPosts(
  'https://jsonplaceholder.typicode.com/posts?_limit=5'
); // returns a promise

// reading a promise outside PostSelector component's render function to avoid re-triggering the promise repeatedly on each render, leading to an infinite loop of pending promises.

export default function PostSelector({ onSelectPost }) {
  const posts = resource.read(); // trying to resolve promise and rerender the component

  return (
    <div>
      <select onChange={onSelectPost}>
        <option value="">Select Post</option>
        {posts.map((post) => (
          <option key={post.id} value={post.id}>
            {post.title}
          </option>
        ))}
      </select>
    </div>
  );
}
