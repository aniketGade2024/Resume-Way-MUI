import { useParams } from '@/routes/hooks';
import { Helmet } from 'react-helmet-async';
import { OrderDetailsView } from '@/sections/order/view';

// ----------------------------------------------------------------------

export default function OrderDetailsPage() {
  const params = useParams();

  const { id } = params;

  return (
    <>
      <Helmet>
        <title> Dashboard: Order Details</title>
      </Helmet>

      <OrderDetailsView id={`${id}`} />
    </>
  );
}
