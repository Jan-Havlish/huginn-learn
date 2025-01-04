import PostList from "../components/PostList";
import QuizDisplay from "../components/QuizDisplay";
import StudyCardList from "../components/StudyCardsList";

const posts = [
  {
    id: '1',
    title: 'The Benefits of SolidJS',
    content: 'SolidJS is a declarative JavaScript library that provides high performance and fine-grained reactivity...',
    author: 'John Doe',
    date: '2025-01-04',
  },
  {
    id: '2',
    title: 'How to Use Tailwind CSS in React',
    content: 'Tailwind CSS is a utility-first CSS framework that can be used to quickly style React applications...',
    author: 'Jane Smith',
    date: '2025-01-03',
  },
  {
    id: '3',
    title: 'Understanding Web Accessibility',
    content: 'Web accessibility ensures that websites are usable by people with disabilities, including those with visual or hearing impairments...',
    author: 'Michael Brown',
    date: '2025-01-02',
  },
];

const quiz = {
    questions: [
      {
        text: 'What is the capital of France?',
        options: [
          { text: 'Berlin', correct: false },
          { text: 'Paris', correct: true },
          { text: 'Madrid', correct: false },
          { text: 'Rome', correct: false },
        ],
      },
      {
        text: 'Which planet is known as the Red Planet?',
        options: [
          { text: 'Earth', correct: false },
          { text: 'Mars', correct: true },
          { text: 'Jupiter', correct: false },
          { text: 'Saturn', correct: false },
        ],
      },
      {
        text: 'Who wrote "To Kill a Mockingbird"?',
        options: [
          { text: 'Harper Lee', correct: true },
          { text: 'J.K. Rowling', correct: false },
          { text: 'Mark Twain', correct: false },
          { text: 'Ernest Hemingway', correct: false },
        ],
      },
    ],
  };

  const studyCards = [
    {
      id: '1',
      front: 'JavaScript Functions',
      back: 'A function is a block of code designed to perform a particular task. Functions can accept parameters and return a value.',
    },
    {
      id: '2',
      front: 'React Hooks',
      back: 'Hooks are a feature in React that allow you to use state and other React features without writing a class.',
    },
    {
      id: '3',
      front: 'Tailwind CSS',
      back: 'Tailwind CSS is a utility-first CSS framework that can be used to quickly style React applications.',
    },
  ];

const Discover = () => {
  return (
    <div class="container mx-auto">
      <h1 class="text-3xl font-bold mb-4">Discover</h1>
      <PostList posts={posts} />
      <QuizDisplay quiz={quiz} />
      <StudyCardList studyCards={studyCards} />
    </div>
  );
};

export default Discover;
