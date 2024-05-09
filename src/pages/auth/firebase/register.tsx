import { Helmet } from 'react-helmet-async';
import { FirebaseRegisterView } from '@/sections/auth/firebase';

// ----------------------------------------------------------------------

export default function RegisterPage() {
  return (
    <>
      <Helmet>
        <title> Firebase: Register</title>
      </Helmet>

      <FirebaseRegisterView />
    </>
  );
}
