import Link from "next/link";

type Props = {
  title: string;
  description: string;
  date: string;
  tags: string[];
  slug: string;
};

export const SinglePost = (props: Props) => {
  const { title, description, date, tags, slug } = props;
  return (
    <>
      <section className="lg:w-1/2 bg-violet-300 mb-8 mx-auto rounded-md p-5 shadow-2xl hover:shadow-none hover:translate-y-1 transition-all duration-300">
        <div className="flex items-center gap-3">
          <h2 className="text-gray-500">
            <Link
              href={`/posts/${slug}`}
              className="no-underline hover:underline hover:text-violet-500 transition-all duration-300"
            >
              {title}{" "}
            </Link>
          </h2>
          <div className="text-gray-500">{date}</div>
          {tags.map((tag: string) => (
            <span
              className="text-white bg-violet-400 rounded-xl px-2 font-medium"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-gray-500">{description}</p>
      </section>
    </>
  );
};
