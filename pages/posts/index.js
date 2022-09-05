import { Fragment } from "react";
import HeadData from "../../components/head/head";
import AllPosts from "../../components/posts/all-posts/all-posts";
import { getAllPosts } from "../../helpers/post-utils";

const AllPostsPage = ({ posts }) => {
  return (
    <Fragment>
      <HeadData
        title={"All Posts"}
        description={"A list of all programming-related tutorials and posts."}
      />
      <AllPosts posts={posts} />
    </Fragment>
  );
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
