import { Helmet } from 'react-helmet-async';
import { SupabaseLoginView } from '@/sections/auth/supabase';

// ----------------------------------------------------------------------

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title> Supabase: Login</title>
      </Helmet>

      <SupabaseLoginView />
    </>
  );
}
