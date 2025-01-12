import { Helmet } from 'react-helmet-async';
import SnackbarView from '@/sections/_examples/extra/snackbar-view';

// ----------------------------------------------------------------------

export default function SnackbarPage() {
  return (
    <>
      <Helmet>
        <title> Components: Snackbar</title>
      </Helmet>

      <SnackbarView />
    </>
  );
}
