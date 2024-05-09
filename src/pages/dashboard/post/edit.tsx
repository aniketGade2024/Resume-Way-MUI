import { useParams } from '@/routes/hooks';
import { Helmet } from 'react-helmet-async';
import { PostEditView } from '@/sections/blog/view';

// ----------------------------------------------------------------------

export default function PostEditPage() {
  const params = useParams();

  const { title } = params;

  return (
    <>
      <Helmet>
        <title> Dashboard: Post Edit</title>
      </Helmet>

      <PostEditView title={`${title}`} />
    </>
  );
}
