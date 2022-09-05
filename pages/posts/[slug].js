import { Fragment } from "react";
import HeadData from "../../components/head/head";
import PostContent from "../../components/posts/post-detail/post-content/post-content";
import { getPostData, getPostFiles } from "../../helpers/post-utils";

const PostDetailPage = ({ post }) => {
  return (
    <Fragment>
      <HeadData title={post.title} description={post.excert} />
      <PostContent post={post} />
    </Fragment>
  );
};

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);
  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths(context) {
  const postFilenames = getPostFiles();
  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""));
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export default PostDetailPage;
