import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { GuestGuard } from '@/auth/guard';
import CompactLayout from '@/layouts/compact';
import AuthClassicLayout from '@/layouts/auth/classic';
import { SplashScreen } from '@/components/loading-screen';

// ----------------------------------------------------------------------

// AMPLIFY
const AmplifyLoginPage = lazy(() => import('@/pages/auth/amplify/login'));
const AmplifyRegisterPage = lazy(() => import('@/pages/auth/amplify/register'));
const AmplifyVerifyPage = lazy(() => import('@/pages/auth/amplify/verify'));
const AmplifyNewPasswordPage = lazy(() => import('@/pages/auth/amplify/new-password'));
const AmplifyForgotPasswordPage = lazy(() => import('@/pages/auth/amplify/forgot-password'));

// JWT
const JwtLoginPage = lazy(() => import('@/pages/auth/jwt/login'));
const JwtRegisterPage = lazy(() => import('@/pages/auth/jwt/register'));

// FIREBASE
const FirebaseLoginPage = lazy(() => import('@/pages/auth/firebase/login'));
const FirebaseRegisterPage = lazy(() => import('@/pages/auth/firebase/register'));
const FirebaseVerifyPage = lazy(() => import('@/pages/auth/firebase/verify'));
const FirebaseForgotPasswordPage = lazy(() => import('@/pages/auth/firebase/forgot-password'));

// AUTH0
const Auth0LoginPage = lazy(() => import('@/pages/auth/auth0/login'));
const Auth0Callback = lazy(() => import('@/pages/auth/auth0/callback'));

// SUPABASE
const SupabaseLoginPage = lazy(() => import('@/pages/auth/supabase/login'));
const SupabaseVerifyPage = lazy(() => import('@/pages/auth/supabase/verify'));
const SupabaseRegisterPage = lazy(() => import('@/pages/auth/supabase/register'));
const SupabaseNewPasswordPage = lazy(() => import('@/pages/auth/supabase/new-password'));
const SupabaseForgotPasswordPage = lazy(() => import('@/pages/auth/supabase/forgot-password'));

// ----------------------------------------------------------------------

const authAmplify = {
  path: 'amplify',
  element: (
    <Suspense fallback={<SplashScreen />}>
      <Outlet />
    </Suspense>
  ),
  children: [
    {
      path: 'login',
      element: (
        <GuestGuard>
          <AuthClassicLayout>
            <AmplifyLoginPage />
          </AuthClassicLayout>
        </GuestGuard>
      ),
    },
    {
      path: 'register',
      element: (
        <GuestGuard>
          <AuthClassicLayout title="Manage the job more effectively with Minimal">
            <AmplifyRegisterPage />
          </AuthClassicLayout>
        </GuestGuard>
      ),
    },
    {
      element: (
        <CompactLayout>
          <Outlet />
        </CompactLayout>
      ),
      children: [
        { path: 'verify', element: <AmplifyVerifyPage /> },
        { path: 'new-password', element: <AmplifyNewPasswordPage /> },
        { path: 'forgot-password', element: <AmplifyForgotPasswordPage /> },
      ],
    },
  ],
};

const authJwt = {
  path: 'jwt',
  element: (
    <Suspense fallback={<SplashScreen />}>
      <Outlet />
    </Suspense>
  ),
  children: [
    {
      path: 'login',
      element: (
        <GuestGuard>
          <AuthClassicLayout>
            <JwtLoginPage />
          </AuthClassicLayout>
        </GuestGuard>
      ),
    },
    {
      path: 'register',
      element: (
        <GuestGuard>
          <AuthClassicLayout title="Manage the job more effectively with Minimal">
            <JwtRegisterPage />
          </AuthClassicLayout>
        </GuestGuard>
      ),
    },
  ],
};

const authFirebase = {
  path: 'firebase',
  element: (
    <Suspense fallback={<SplashScreen />}>
      <Outlet />
    </Suspense>
  ),
  children: [
    {
      path: 'login',
      element: (
        <GuestGuard>
          <AuthClassicLayout>
            <FirebaseLoginPage />
          </AuthClassicLayout>
        </GuestGuard>
      ),
    },
    {
      path: 'register',
      element: (
        <GuestGuard>
          <AuthClassicLayout title="Manage the job more effectively with Minimal">
            <FirebaseRegisterPage />
          </AuthClassicLayout>
        </GuestGuard>
      ),
    },
    {
      element: (
        <CompactLayout>
          <Outlet />
        </CompactLayout>
      ),
      children: [
        { path: 'verify', element: <FirebaseVerifyPage /> },
        { path: 'forgot-password', element: <FirebaseForgotPasswordPage /> },
      ],
    },
  ],
};

const authAuth0 = {
  path: 'auth0',
  element: (
    <Suspense fallback={<SplashScreen />}>
      <Outlet />
    </Suspense>
  ),
  children: [
    {
      path: 'login',
      element: (
        <GuestGuard>
          <AuthClassicLayout>
            <Auth0LoginPage />
          </AuthClassicLayout>
        </GuestGuard>
      ),
    },
    {
      path: 'callback',
      element: (
        <GuestGuard>
          <Auth0Callback />
        </GuestGuard>
      ),
    },
  ],
};

const authSupabase = {
  path: 'supabase',
  element: (
    <Suspense fallback={<SplashScreen />}>
      <Outlet />
    </Suspense>
  ),
  children: [
    {
      path: 'login',
      element: (
        <GuestGuard>
          <AuthClassicLayout>
            <SupabaseLoginPage />
          </AuthClassicLayout>
        </GuestGuard>
      ),
    },
    {
      path: 'register',
      element: (
        <GuestGuard>
          <AuthClassicLayout title="Manage the job more effectively with Minimal">
            <SupabaseRegisterPage />
          </AuthClassicLayout>
        </GuestGuard>
      ),
    },
    {
      element: (
        <CompactLayout>
          <Outlet />
        </CompactLayout>
      ),
      children: [
        { path: 'verify', element: <SupabaseVerifyPage /> },
        {
          path: 'forgot-password',
          element: <SupabaseForgotPasswordPage />,
        },
        { path: 'new-password', element: <SupabaseNewPasswordPage /> },
      ],
    },
  ],
};

export const authRoutes = [
  {
    path: 'auth',
    children: [authAmplify, authJwt, authFirebase, authAuth0, authSupabase],
  },
];
