import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { getAllPosts } from "../../lib/notionAPI";
import { SinglePost } from "@/components/post/singlePost";
import { getPostsForTopPage } from "../../lib/notionAPI";
import { GetStaticProps } from "next";

const inter = Inter({ subsets: ["latin"] });

export const getStaticProps: GetStaticProps = async () => {
  const fivePosts = await getPostsForTopPage();

  return {
    props: {
      fivePosts,
    },
    revalidate: 60,
  };
};

export default function Home({ fivePosts }) {
  // console.log(allPosts);
  return (
    <>
      <div className="constainer h-full w-full mx-auto">
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="constainer w-full mt-16">
          <h1 className="text-5xl font-medium text-center mb-16">
            neginasu Blog🍆
          </h1>
          <div className="mx-4">
            {fivePosts.map((post, index) => (
              <SinglePost
                key={`${post.date}${index}`}
                title={post.title}
                description={post.description}
                date={post.date}
                tags={post.tags}
                slug={post.slug}
              />
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
