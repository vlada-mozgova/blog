import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import PostHeader from "../post-header/post-header";
import classes from "./post-content.module.scss";

SyntaxHighlighter.registerLanguage("js", js);
SyntaxHighlighter.registerLanguage("css", css);

const PostContent = ({ post }) => {
  const customRenderes = {
    p(paragraph) {
      const { node } = paragraph;
      if (node.children[0].tagName === "img") {
        const image = node.children[0];

        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }
    },
    code(code) {
      const { className, children } = code;
      const language = className.split("-")[1];
      return (
        <SyntaxHighlighter
          style={atomDark}
          language={language}
          children={children}
        />
      );
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader
        title={post.title}
        image={`/images/posts/${post.slug}/${post.image}`}
      />
      <ReactMarkdown components={customRenderes}>{post.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
