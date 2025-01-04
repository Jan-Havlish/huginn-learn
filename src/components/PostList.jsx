import PostCard from "./PostCard";

const PostList = (props) => {
  return (
    <div class="space-y-4">
      {props.posts.map(post => (
        <PostCard post={post} />
      ))}
    </div>
  );
};

export default PostList;