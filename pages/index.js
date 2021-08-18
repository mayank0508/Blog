import Head from 'next/head';
import Link from 'next/link';
import { blogPosts } from '../lib/data';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>My Blog 🚀📦</h1>
      </main>{' '}
      <div>
        {blogPosts.map(item => (
          <div key={item.id}>
            <div>
              <Link href={`/blog/${item.id}`}>
                {' '}
                {/* this make the link on the title of the blog post */}
                <a>{item.title}</a>
              </Link>
            </div>
            <div>{item.date.toLocaleString()}</div>
            <div>{item.content}</div>
          </div>
        ))}
      </div>
      <footer>Powered by 💩</footer>
    </div>
  );
}
