import { Fragment } from "react";
import FeaturedPosts from "../components/home-page/featured-posts/featured-posts";
import Hero from "../components/home-page/hero/hero";
import { getFeaturedPosts } from "../helpers/post-utils";

const HomePage = ({ posts }) => {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={posts} />
    </Fragment>
  );
};

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;
