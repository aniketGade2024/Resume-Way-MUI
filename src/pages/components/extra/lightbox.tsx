import { Helmet } from 'react-helmet-async';
import LightboxView from '@/sections/_examples/extra/lightbox-view';

// ----------------------------------------------------------------------

export default function LightboxPage() {
  return (
    <>
      <Helmet>
        <title> Components: Lightbox</title>
      </Helmet>

      <LightboxView />
    </>
  );
}
