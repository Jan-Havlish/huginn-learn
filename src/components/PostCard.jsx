const PostCard = (props) => {
  return (
    <div class="bg-white rounded-lg shadow-md p-6 mb-4">
      <h2 class="text-2xl font-bold mb-2">{props.post.title}</h2>
      <p class="text-gray-600 mb-4">{props.post.content}</p>
      <div class="flex justify-between text-sm text-gray-500">
        <span>By {props.post.author}</span>
        <span>{props.post.date}</span>
      </div>
    </div>
  );
};

export default PostCard;