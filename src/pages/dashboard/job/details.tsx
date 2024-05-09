import { useParams } from '@/routes/hooks';
import { Helmet } from 'react-helmet-async';
import { JobDetailsView } from '@/sections/job/view';

// ----------------------------------------------------------------------

export default function JobDetailsPage() {
  const params = useParams();

  const { id } = params;

  return (
    <>
      <Helmet>
        <title> Dashboard: Job Details</title>
      </Helmet>

      <JobDetailsView id={`${id}`} />
    </>
  );
}
