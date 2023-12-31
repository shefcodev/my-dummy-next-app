import { useRouter } from 'next/router';

const DetailPage = () => {
  const { query } = useRouter();

  return <h1>{query.newsId}</h1>;
};

export default DetailPage;
