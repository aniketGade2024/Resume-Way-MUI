import { useParams } from '@/routes/hooks';
import { Helmet } from 'react-helmet-async';
import { JobEditView } from '@/sections/job/view';

// ----------------------------------------------------------------------

export default function JobEditPage() {
  const params = useParams();

  const { id } = params;

  return (
    <>
      <Helmet>
        <title> Dashboard: Dashboard: Job Edit</title>
      </Helmet>

      <JobEditView id={`${id}`} />
    </>
  );
}
