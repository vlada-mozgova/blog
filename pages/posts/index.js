import AllPosts from "../../components/posts/all-posts/all-posts";
import { getAllPosts } from "../../helpers/post-utils";

const AllPostsPage = ({ posts }) => {
  return <AllPosts posts={posts} />;
};

export function getStaticProps() {
  const featuredPosts = getAllPosts();
  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default AllPostsPage;
