import { Helmet } from 'react-helmet-async';
import { OverviewBankingView } from '@/sections/overview/banking/view';

// ----------------------------------------------------------------------

export default function OverviewBankingPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Banking</title>
      </Helmet>

      <OverviewBankingView />
    </>
  );
}
