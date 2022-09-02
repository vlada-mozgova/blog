import { Fragment } from "react";
import FeaturedPosts from "../components/home-page/featured-posts/featured-posts";
import Hero from "../components/home-page/hero/hero";

const HomePage = () => {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts />
    </Fragment>
  );
};
export default HomePage;
