import { Helmet } from 'react-helmet-async';
import PermissionDeniedView from '@/sections/permission/view';

// ----------------------------------------------------------------------

export default function PermissionDeniedPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Permission Denied</title>
      </Helmet>

      <PermissionDeniedView />
    </>
  );
}
