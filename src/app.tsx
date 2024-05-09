/* eslint-disable perfectionist/sort-imports */
import '@/global.css';

// i18n
import '@/locales/i18n';

// ----------------------------------------------------------------------

import Router from '@/routes/sections';

import { useScrollToTop } from '@/hooks/use-scroll-to-top';

import ThemeProvider from '@/theme';
import { LocalizationProvider } from '@/locales';

import ProgressBar from '@/components/progress-bar';
import { MotionLazy } from '@/components/animate/motion-lazy';
import SnackbarProvider from '@/components/snackbar/snackbar-provider';
import { SettingsDrawer, SettingsProvider } from '@/components/settings';

import { CheckoutProvider } from '@/sections/checkout/context';

import { AuthProvider } from '@/auth/context/jwt';
// import { AuthProvider } from '@/auth/context/auth0';
// import { AuthProvider } from '@/auth/context/amplify';
// import { AuthProvider } from '@/auth/context/firebase';
// import { AuthProvider } from '@/auth/context/supabase';

// ----------------------------------------------------------------------

export default function App() {
  useScrollToTop();

  return (
    <AuthProvider>
      <LocalizationProvider>
        <SettingsProvider
          defaultSettings={{
            themeMode: 'light', // 'light' | 'dark'
            themeDirection: 'ltr', //  'rtl' | 'ltr'
            themeContrast: 'default', // 'default' | 'bold'
            themeLayout: 'vertical', // 'vertical' | 'horizontal' | 'mini'
            themeColorPresets: 'default', // 'default' | 'cyan' | 'purple' | 'blue' | 'orange' | 'red'
            themeStretch: false,
          }}
        >
          <ThemeProvider>
            <MotionLazy>
              <SnackbarProvider>
                <CheckoutProvider>
                  <SettingsDrawer />
                  <ProgressBar />

                  <Router />
                </CheckoutProvider>
              </SnackbarProvider>
            </MotionLazy>
          </ThemeProvider>
        </SettingsProvider>
      </LocalizationProvider>
    </AuthProvider>
  );
}
