import { Helmet } from 'react-helmet-async';
import { ModernRegisterView } from '@/sections/auth-demo/modern';

// ----------------------------------------------------------------------

export default function ModernRegisterPage() {
  return (
    <>
      <Helmet>
        <title> Auth Classic: Register</title>
      </Helmet>

      <ModernRegisterView />
    </>
  );
}
