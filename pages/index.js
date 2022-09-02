import { Fragment } from "react";
import FeaturedPosts from "../components/home-page/featured-posts/featured-posts";
import Hero from "../components/home-page/hero/hero";

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

const HomePage = () => {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
};
export default HomePage;
