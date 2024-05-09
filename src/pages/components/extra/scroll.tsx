import { Helmet } from 'react-helmet-async';
import ScrollView from '@/sections/_examples/extra/scroll-view';

// ----------------------------------------------------------------------

export default function ScrollPage() {
  return (
    <>
      <Helmet>
        <title> Components: Scroll</title>
      </Helmet>

      <ScrollView />
    </>
  );
}
