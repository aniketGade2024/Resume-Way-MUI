import { Helmet } from 'react-helmet-async';
import { AmplifyVerifyView } from '@/sections/auth/amplify';

// ----------------------------------------------------------------------

export default function VerifyPage() {
  return (
    <>
      <Helmet>
        <title> Amplify: Verify</title>
      </Helmet>

      <AmplifyVerifyView />
    </>
  );
}
