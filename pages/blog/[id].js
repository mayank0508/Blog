import Head from 'next/head';
import { format, parseISO, add } from 'date-fns';
import { blogPosts } from '../../lib/data';

export default function BlogPage({ title, date, content }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <h2 className="text-5xl font-bold my-3">{title}</h2>
          <h5 className="font-style: italic my-3">
            {format(parseISO(date), 'MMMM do, uuu')}
          </h5>
        </div>
        <h1 className="border-2 p-3 rounded-xl">{content}</h1>
      </main>{' '}
      <footer className="text-center my-4">Powered by 💩</footer>
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
