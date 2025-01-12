import { Helmet } from 'react-helmet-async';
import { InvoiceCreateView } from '@/sections/invoice/view';

// ----------------------------------------------------------------------

export default function InvoiceCreatePage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Create a new invoice</title>
      </Helmet>

      <InvoiceCreateView />
    </>
  );
}
