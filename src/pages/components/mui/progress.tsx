import { Helmet } from 'react-helmet-async';
import ProgressView from '@/sections/_examples/mui/progress-view';

// ----------------------------------------------------------------------

export default function ProgressPage() {
  return (
    <>
      <Helmet>
        <title> MUI: Progress</title>
      </Helmet>

      <ProgressView />
    </>
  );
}
