import { useParams } from "@solidjs/router";

export default function Profile() {
    console.log("Profile")

  const params = useParams();
  const {username} = params

  return (
    <div>
      <h1>{username}</h1>
      mjfg
    </div>
  );
}
