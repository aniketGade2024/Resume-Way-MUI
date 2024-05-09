import { Helmet } from 'react-helmet-async';
import { SupabaseForgotPasswordView } from '@/sections/auth/supabase';

// ----------------------------------------------------------------------

export default function ForgotPasswordPage() {
  return (
    <>
      <Helmet>
        <title> Supabase: Forgot Password</title>
      </Helmet>

      <SupabaseForgotPasswordView />
    </>
  );
}
