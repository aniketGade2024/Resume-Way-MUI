import { Helmet } from 'react-helmet-async';
import { SupabaseRegisterView } from '@/sections/auth/supabase';

// ----------------------------------------------------------------------

export default function RegisterPage() {
  return (
    <>
      <Helmet>
        <title> Supabase: Register</title>
      </Helmet>

      <SupabaseRegisterView />
    </>
  );
}
