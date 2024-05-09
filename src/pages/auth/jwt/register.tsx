import { Helmet } from 'react-helmet-async';
import { JwtRegisterView } from '@/sections/auth/jwt';

// ----------------------------------------------------------------------

export default function RegisterPage() {
  return (
    <>
      <Helmet>
        <title> Jwt: Register</title>
      </Helmet>

      <JwtRegisterView />
    </>
  );
}
