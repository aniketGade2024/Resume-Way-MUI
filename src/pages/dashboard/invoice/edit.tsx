import { useParams } from '@/routes/hooks';
import { Helmet } from 'react-helmet-async';
import { InvoiceEditView } from '@/sections/invoice/view';

// ----------------------------------------------------------------------

export default function InvoiceEditPage() {
  const params = useParams();

  const { id } = params;

  return (
    <>
      <Helmet>
        <title> Dashboard: Invoice Edit</title>
      </Helmet>

      <InvoiceEditView id={`${id}`} />
    </>
  );
}
