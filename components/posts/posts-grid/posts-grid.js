import PostItem from "../post-item/post-item";
import classes from "./posts-grid.module.scss";

const PostsGrid = ({ posts }) => {
  return (
    <ul className={classes.grid}>
      {posts && posts.map((post) => <PostItem key={post.slug} post={post} />)}
    </ul>
  );
};

export default PostsGrid;
