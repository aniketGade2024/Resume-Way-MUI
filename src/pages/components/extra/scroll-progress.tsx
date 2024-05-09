import { Helmet } from 'react-helmet-async';
import ScrollProgressView from '@/sections/_examples/extra/scroll-progress-view';

// ----------------------------------------------------------------------

export default function ScrollProgressPage() {
  return (
    <>
      <Helmet>
        <title> Components: Scroll Progress</title>
      </Helmet>

      <ScrollProgressView />
    </>
  );
}
