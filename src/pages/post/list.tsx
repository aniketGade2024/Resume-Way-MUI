import { Helmet } from 'react-helmet-async';
import { PostListHomeView } from '@/sections/blog/view';

// ----------------------------------------------------------------------

export default function PostListHomePage() {
  return (
    <>
      <Helmet>
        <title> Post: List</title>
      </Helmet>

      <PostListHomeView />
    </>
  );
}
