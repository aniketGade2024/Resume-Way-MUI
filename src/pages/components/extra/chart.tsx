import { Helmet } from 'react-helmet-async';
import ChartView from '@/sections/_examples/extra/chart-view';

// ----------------------------------------------------------------------

export default function ChartPage() {
  return (
    <>
      <Helmet>
        <title> Components: Chart</title>
      </Helmet>

      <ChartView />
    </>
  );
}
