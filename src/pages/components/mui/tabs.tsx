import { Helmet } from 'react-helmet-async';
import TabsView from '@/sections/_examples/mui/tabs-view';

// ----------------------------------------------------------------------

export default function TabsPage() {
  return (
    <>
      <Helmet>
        <title> MUI: Tabs</title>
      </Helmet>

      <TabsView />
    </>
  );
}
