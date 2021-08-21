import Head from 'next/head';
import { format, parseISO, add } from 'date-fns';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';

import { getAllPosts } from '../../lib/data';

export default function BlogPage({ title, date, content }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <h2 className="text-5xl font-bold my-3 text-decoration: underline">
            {title}
          </h2>
          <h5 className="text-gray-500 my-3">
            {format(parseISO(date), 'MMMM do, uuu')}
          </h5>
        </div>
        <h1 className="prose border-2 p-3 rounded-xl">
          <MDXRemote {...content} />
        </h1>
      </main>{' '}
      <footer className="text-center my-4">Powered by 💩</footer>
    </div>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const allPosts = getAllPosts();
  const { data, content } = allPosts.find(item => item.id === params.id);
  const mdxSource = await serialize(content);
  return {
    props: {
      ...data,
      date: data.date.toISOString(),
      content: mdxSource
    }
  };
}

export async function getStaticPaths() {
  return {
    paths: getAllPosts().map(post => ({
      params: {
        id: post.id
      }
    })),
    fallback: false
  };
}
