import { Helmet } from 'react-helmet-async';
import { FirebaseForgotPasswordView } from '@/sections/auth/firebase';

// ----------------------------------------------------------------------

export default function ForgotPasswordPage() {
  return (
    <>
      <Helmet>
        <title> Firebase: Forgot Password</title>
      </Helmet>

      <FirebaseForgotPasswordView />
    </>
  );
}
