import { lazy, Suspense } from 'react';
import MainLayout from '@/layouts/main';
import { Outlet } from 'react-router-dom';
import SimpleLayout from '@/layouts/simple';
import CompactLayout from '@/layouts/compact';
import { SplashScreen } from '@/components/loading-screen';

// ----------------------------------------------------------------------

export const HomePage = lazy(() => import('@/pages/home'));
const Page500 = lazy(() => import('@/pages/500'));
const Page403 = lazy(() => import('@/pages/403'));
const Page404 = lazy(() => import('@/pages/404'));
const FaqsPage = lazy(() => import('@/pages/faqs'));
const AboutPage = lazy(() => import('@/pages/about-us'));
const ContactPage = lazy(() => import('@/pages/contact-us'));
const PricingPage = lazy(() => import('@/pages/pricing'));
const PaymentPage = lazy(() => import('@/pages/payment'));
const ComingSoonPage = lazy(() => import('@/pages/coming-soon'));
const MaintenancePage = lazy(() => import('@/pages/maintenance'));
// PRODUCT
const ProductListPage = lazy(() => import('@/pages/product/list'));
const ProductDetailsPage = lazy(() => import('@/pages/product/details'));
const ProductCheckoutPage = lazy(() => import('@/pages/product/checkout'));
// BLOG
const PostListPage = lazy(() => import('@/pages/post/list'));
const PostDetailsPage = lazy(() => import('@/pages/post/details'));

// ----------------------------------------------------------------------

export const mainRoutes = [
  {
    element: (
      <MainLayout>
        <Suspense fallback={<SplashScreen />}>
          <Outlet />
        </Suspense>
      </MainLayout>
    ),
    children: [
      { path: 'about-us', element: <AboutPage /> },
      { path: 'contact-us', element: <ContactPage /> },
      { path: 'faqs', element: <FaqsPage /> },
      {
        path: 'product',
        children: [
          { element: <ProductListPage />, index: true },
          { path: 'list', element: <ProductListPage /> },
          { path: ':id', element: <ProductDetailsPage /> },
          { path: 'checkout', element: <ProductCheckoutPage /> },
        ],
      },
      {
        path: 'post',
        children: [
          { element: <PostListPage />, index: true },
          { path: 'list', element: <PostListPage /> },
          { path: ':title', element: <PostDetailsPage /> },
        ],
      },
    ],
  },
  {
    element: (
      <SimpleLayout>
        <Suspense fallback={<SplashScreen />}>
          <Outlet />
        </Suspense>
      </SimpleLayout>
    ),
    children: [
      { path: 'pricing', element: <PricingPage /> },
      { path: 'payment', element: <PaymentPage /> },
    ],
  },
  {
    element: (
      <CompactLayout>
        <Suspense fallback={<SplashScreen />}>
          <Outlet />
        </Suspense>
      </CompactLayout>
    ),
    children: [
      { path: 'coming-soon', element: <ComingSoonPage /> },
      { path: 'maintenance', element: <MaintenancePage /> },
      { path: '500', element: <Page500 /> },
      { path: '404', element: <Page404 /> },
      { path: '403', element: <Page403 /> },
    ],
  },
];
