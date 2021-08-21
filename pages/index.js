import Head from 'next/head';
import Link from 'next/link';
import { format, parseISO, add } from 'date-fns';
import { getAllPosts } from '../lib/data';

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>My Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="space-y-5">
        {posts.map(item => (
          <BlogListItem key={item.id} {...item} />
        ))}
      </div>
      <footer className="text-center my-4">Powered by 💩</footer>
    </div>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const allPosts = getAllPosts();
  // const { data, content, id } = allPosts.find(item => item.id === params.id);
  return {
    props: {
      posts: allPosts.map(({ data, content, id }) => ({
        ...data,
        date: data.date.toISOString(),
        content,
        id
      }))
    }
  };
}

function BlogListItem({ id, title, date, content }) {
  return (
    <div className="border-2 border-yellow-200 rounded-xl shadow-lg p-6 hover:bg-yellow-600 transition delay-100 duration-200 ease-in ">
      <div>
        <Link href={`/blog/${id}`}>
          <a className="text-3xl font-bold">{title}</a>
        </Link>
      </div>
      <div className="font-style: italic font-semibold ">
        {format(parseISO(date), 'MMMM do, uuu')}
      </div>
      <div>{content.substring(0,50)}</div>
    </div>
  );
}
