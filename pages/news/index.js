import { Fragment } from 'react';
import Link from 'next/link';

const news = [
  { path: 'react-framework', headline: 'NextJS is a great react framework' },
  {
    path: 'file-based',
    headline: 'NextJS provides File-based Routhing Functionality',
  },
  {
    path: 'server-side',
    headline:
      'NextJS implement the blend of Server-side and Client-side Rendering',
  },
  { path: 'fullstack', headline: "It's alsp provide fullstack functionality" },
];

const NewsPage = () => {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul style={{ listStyleType: 'none' }}>
        {news.map(({ path, headline }, idx) => (
          <li key={idx} style={{ listStyleType: 'none' }}>
            <Link
              href={`news/${path}`}
              style={{ textDecoration: 'none', color: '#000000' }}
            >
              {headline}
            </Link>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default NewsPage;
