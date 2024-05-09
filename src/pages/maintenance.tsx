import { Helmet } from 'react-helmet-async';
import MaintenanceView from '@/sections/maintenance/view';

// ----------------------------------------------------------------------

export default function MaintenancePage() {
  return (
    <>
      <Helmet>
        <title> Maintenance</title>
      </Helmet>

      <MaintenanceView />
    </>
  );
}
