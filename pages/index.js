import Head from 'next/head';
import Link from 'next/link';
import { format, parseISO, add } from 'date-fns';
import { blogPosts } from '../lib/data';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="space-y-5">

      {blogPosts.map(item => (
          < BlogListItem key={item.id} {...item} />
        ))}
      </div>
      <footer className="text-center my-4">Powered by 💩</footer>
    </div>
  );
}

function BlogListItem({ id, title, date, content }) {
  return (
    <div className="border-2 border-yellow-200 rounded-xl shadow-lg p-6 hover:bg-yellow-600 transition delay-100 duration-200 ease-in ">
      <div>
        <Link href={`/blog/${id}`}>
          <a className="text-3xl font-bold">{title}</a>
        </Link>
      </div>
      <div className="font-style: italic font-semibold ">{format(parseISO(date), 'MMMM do, uuu')}</div>
      <div>{content}</div>
    </div>
  );
};
