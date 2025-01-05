import PostList from "../components/PostList";
import supabase from "../supabase/client";
import { onMount, createSignal } from "solid-js";

const Discover = () => {
  const [posts, setPosts] = createSignal([]);

  async function getPosts() {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error("Error fetching posts:", error);
    }

    return data || []; 
  }

  onMount(async () => {
    const data = await getPosts();
    console.log("Posts:", data);
    setPosts(data); 
  });

  return (
    <div class="container mx-auto">
      <h1 class="text-3xl font-bold mb-4">Objevit</h1> {/*Discover*/}
      <PostList posts={posts()} />
    </div>
  );
};

export default Discover;
