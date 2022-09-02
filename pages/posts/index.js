import AllPosts from "../../components/posts/all-posts/all-posts";
const DUMMY_POSTS = [
  {
    title: "GETTING STARTED",
    image: "getting-started-nextjs.png",
    excerpt: "NextJS is a framework",
    date: "2022-09-02",
    slug: "getting-started",
  },
  {
    title: "GETTING STARTED",
    image: "getting-started-nextjs.png",
    excerpt: "NextJS is a framework",
    date: "2022-09-02",
    slug: "getting-started2",
  },
  {
    title: "GETTING STARTED",
    image: "getting-started-nextjs.png",
    excerpt: "NextJS is a framework",
    date: "2022-09-02",
    slug: "getting-started3",
  },
  {
    title: "GETTING STARTED",
    image: "getting-started-nextjs.png",
    excerpt: "NextJS is a framework",
    date: "2022-09-02",
    slug: "getting-started4",
  },
];
const AllPostsPage = () => {
  return <AllPosts posts={DUMMY_POSTS} />;
};

export default AllPostsPage;
