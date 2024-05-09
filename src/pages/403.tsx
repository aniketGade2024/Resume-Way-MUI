import { View403 } from '@/sections/error';
import { Helmet } from 'react-helmet-async';

// ----------------------------------------------------------------------

export default function Page403() {
  return (
    <>
      <Helmet>
        <title> 403 Forbidden</title>
      </Helmet>

      <View403 />
    </>
  );
}
