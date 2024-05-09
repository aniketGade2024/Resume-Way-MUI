import { Helmet } from 'react-helmet-async';
import { AboutView } from '@/sections/about/view';

// ----------------------------------------------------------------------

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title> About us</title>
      </Helmet>

      <AboutView />
    </>
  );
}
