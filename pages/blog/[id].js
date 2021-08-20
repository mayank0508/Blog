import Head from 'next/head';
import { blogPosts } from '../../lib/data';

export default function BlogPage({ title, date, content }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h5>{date}</h5>
        <h1>{content}</h1>
      </main>{' '}
      <footer>Powered by 💩</footer>
    </div>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  return {
    props: blogPosts.find(item => item.id === params.id) // this will be passed to the page component as a props
  };
}

export async function getStaticPaths() {
  return {
    paths: blogPosts.map(item => ({
      params: {
        id: item.id
      }
    })),
    fallback: false
  };
}
