import { Helmet } from 'react-helmet-async';
import AlertView from '@/sections/_examples/mui/alert-view';

// ----------------------------------------------------------------------

export default function AlertPage() {
  return (
    <>
      <Helmet>
        <title> MUI: Alert</title>
      </Helmet>

      <AlertView />
    </>
  );
}
