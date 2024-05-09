import { Helmet } from 'react-helmet-async';
import BlankView from '@/sections/blank/view';

// ----------------------------------------------------------------------

export default function BlankPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Blank</title>
      </Helmet>

      <BlankView />
    </>
  );
}
