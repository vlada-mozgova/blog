import ReactMarkdown from "react-markdown";
import PostHeader from "../post-header/post-header";
import classes from "./post-content.module.scss";

const DUMMY_POST = {
  title: "GETTING STARTED",
  image: "getting-started-nextjs.png",
  date: "2022-09-02",
  slug: "getting-started",
  content: "# This is a first post",
};

const PostContent = () => {
  return (
    <article className={classes.content}>
      <PostHeader
        title={DUMMY_POST.title}
        image={`/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`}
      />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
