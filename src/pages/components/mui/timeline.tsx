import { Helmet } from 'react-helmet-async';
import TimelineView from '@/sections/_examples/mui/timeline-view';

// ----------------------------------------------------------------------

export default function TimelinePage() {
  return (
    <>
      <Helmet>
        <title> MUI: Timeline</title>
      </Helmet>

      <TimelineView />
    </>
  );
}
