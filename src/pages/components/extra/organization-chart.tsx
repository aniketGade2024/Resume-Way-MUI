import { Helmet } from 'react-helmet-async';
import OrganizationalChartView from '@/sections/_examples/extra/organizational-chart-view';

// ----------------------------------------------------------------------

export default function OrganizationalChartPage() {
  return (
    <>
      <Helmet>
        <title> Components: Organizational Chart</title>
      </Helmet>

      <OrganizationalChartView />
    </>
  );
}
