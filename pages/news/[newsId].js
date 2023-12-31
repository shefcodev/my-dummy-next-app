import { useRouter } from 'next/router';

const DetailPage = () => {
  const { query } = useRouter();

  const newsId = query.newsId;

  // send a request to Backend API with newId endpoint
  // to fetch the news details with newId

  return <h1>{newsId}</h1>;
};

export default DetailPage;
