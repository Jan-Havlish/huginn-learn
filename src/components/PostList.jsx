import PostCard from "./PostCard";
import { For, Show } from "solid-js";

const PostList = (props) => {
  return (
    <div>
      <Show when={props.posts.length > 0} fallback={<p>No posts available.</p>}>
        <For each={props.posts}>
          {(post) => <PostCard post={post} />}
        </For>
      </Show>
    </div>
  );
};

export default PostList;
