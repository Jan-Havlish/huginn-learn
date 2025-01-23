import { createSignal, onMount } from "solid-js";
import { useParams } from "@solidjs/router";
import supabase from "../supabase/client";
import PostCard from "../components/PostCard";

export default function Post() {
    console.log("Post")
  const [data, setData] = createSignal(null);

  const params = useParams();
  const {username, post_id} = params
    console.log(post_id, "post_id")
  onMount(async () => {
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .eq("id", post_id)
      .single();

    if (error) {
      console.error(error);
    } else {
      setData(data);
    }
  });

  console.log(data(), "data");

  return (
    <div>
        dgfd
      {data() ? (
        <div>
          <PostCard post={data()} extended={true}/>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
