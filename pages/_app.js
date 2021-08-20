import '../styles/globals.css';
import Link from 'next/link';

function MyApp({ Component, pageProps }) {
  return (
    <div className="mx-auto my-10 w-9/12">
      <header>
        <h1 className="text-purple-900 font-bold text-6xl my-5">My Blog</h1>
        <nav>
          <ul className="flex flex-row space-x-4 justify-right my-4">
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
