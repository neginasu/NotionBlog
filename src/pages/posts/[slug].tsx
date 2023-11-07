import Link from "next/link";
import { getAllPosts, getSinglePost } from "../../../lib/notionAPI";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vsDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

export const getStaticPaths = async () => {
  const allPosts = await getAllPosts();
  const paths = allPosts.map(({ slug }) => ({ params: { slug } }));
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await getSinglePost(params.slug);

  return {
    props: {
      post,
    },
    revalidate: 60,
  };
};

const Post = ({ post }) => {
  console.log(post.markdown);
  return (
    <>
      <section className="container lg:px-2 px-5 h-screen lg:w-2/5 mx-auto mt-20">
        <h2 className="w-full text-2xl font-medium">{post.metadata.title}</h2>
        <div className="border-b-2 w-1/3 mt-1 border-violet-400"></div>
        <span className="text-gray-500">
          posted date at {post.metadata.date}
        </span>
        <br />
        {post.metadata.tags.map((tag: string) => (
          <p className="text-white bg-violet-400 rounded-xl font-medium mt-2 px-2 inline-block mr-2">
            {tag}
          </p>
        ))}
        <div className="mt-10 font-medium">
          <Markdown
            children={post.markdown.parent}
            components={{
              code(props) {
                const { children, className, node, ...rest } = props;
                const match = /language-(\w+)/.exec(className || "");
                return match ? (
                  <SyntaxHighlighter
                    {...rest}
                    PreTag="div"
                    children={String(children).replace(/\n$/, "")}
                    language={match[1]}
                    style={vsDark}
                  />
                ) : (
                  <code {...rest} className={className}>
                    {children}
                  </code>
                );
              },
            }}
          />

          <Link href="/">
            <span className="pb-20 mt-3 no-underline hover:underline hover:text-violet-500 transition-all duration-300">
              ← ホームに戻る
            </span>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Post;
