import { Helmet } from 'react-helmet-async';
import { ModernLoginView } from '@/sections/auth-demo/modern';

// ----------------------------------------------------------------------

export default function ModernLoginPage() {
  return (
    <>
      <Helmet>
        <title> Auth Classic: Login</title>
      </Helmet>

      <ModernLoginView />
    </>
  );
}
