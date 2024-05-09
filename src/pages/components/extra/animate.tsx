import { Helmet } from 'react-helmet-async';
import AnimateView from '@/sections/_examples/extra/animate-view';

// ----------------------------------------------------------------------

export default function AnimatePage() {
  return (
    <>
      <Helmet>
        <title> Components: Animate</title>
      </Helmet>

      <AnimateView />
    </>
  );
}
