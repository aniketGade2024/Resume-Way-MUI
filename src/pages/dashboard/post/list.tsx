import { Helmet } from 'react-helmet-async';
import { PostListView } from '@/sections/blog/view';

// ----------------------------------------------------------------------

export default function PostListPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Post List</title>
      </Helmet>

      <PostListView />
    </>
  );
}
