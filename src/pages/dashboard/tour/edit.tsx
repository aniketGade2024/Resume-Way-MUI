import { useParams } from '@/routes/hooks';
import { Helmet } from 'react-helmet-async';
import { TourEditView } from '@/sections/tour/view';

// ----------------------------------------------------------------------

export default function TourEditPage() {
  const params = useParams();

  const { id } = params;

  return (
    <>
      <Helmet>
        <title> Dashboard: Tour Edit</title>
      </Helmet>

      <TourEditView id={`${id}`} />
    </>
  );
}
