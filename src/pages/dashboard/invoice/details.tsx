import { useParams } from '@/routes/hooks';
import { Helmet } from 'react-helmet-async';
import { InvoiceDetailsView } from '@/sections/invoice/view';

// ----------------------------------------------------------------------

export default function InvoiceDetailsPage() {
  const params = useParams();

  const { id } = params;

  return (
    <>
      <Helmet>
        <title> Dashboard: Invoice Details</title>
      </Helmet>

      <InvoiceDetailsView id={`${id}`} />
    </>
  );
}
