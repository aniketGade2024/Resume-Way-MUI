import { useParams } from '@/routes/hooks';
import { Helmet } from 'react-helmet-async';
import { TourDetailsView } from '@/sections/tour/view';

// ----------------------------------------------------------------------

export default function TourDetailsPage() {
  const params = useParams();

  const { id } = params;

  return (
    <>
      <Helmet>
        <title> Dashboard: Analytics</title>
      </Helmet>

      <TourDetailsView id={`${id}`} />
    </>
  );
}
