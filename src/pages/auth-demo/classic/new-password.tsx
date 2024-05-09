import { Helmet } from 'react-helmet-async';
import { ClassicNewPasswordView } from '@/sections/auth-demo/classic';

// ----------------------------------------------------------------------

export default function ClassicNewPasswordPage() {
  return (
    <>
      <Helmet>
        <title> Auth Classic: New Password</title>
      </Helmet>

      <ClassicNewPasswordView />
    </>
  );
}
