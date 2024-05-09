import { Helmet } from 'react-helmet-async';
import { Auth0LoginView } from '@/sections/auth/auth0';

// ----------------------------------------------------------------------

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title> Auth0: Login</title>
      </Helmet>

      <Auth0LoginView />
    </>
  );
}
