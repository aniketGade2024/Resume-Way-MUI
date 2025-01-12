import { Helmet } from 'react-helmet-async';
import { OverviewBankingView } from '@/sections/overview/booking/view';

// ----------------------------------------------------------------------

export default function OverviewBookingPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Booking</title>
      </Helmet>

      <OverviewBankingView />
    </>
  );
}
