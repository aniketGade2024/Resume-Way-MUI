import { Helmet } from 'react-helmet-async';
import { OverviewEcommerceView } from '@/sections/overview/e-commerce/view';

// ----------------------------------------------------------------------

export default function OverviewEcommercePage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: E-Commerce</title>
      </Helmet>

      <OverviewEcommerceView />
    </>
  );
}
