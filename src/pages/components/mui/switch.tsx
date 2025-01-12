import { Helmet } from 'react-helmet-async';
import SwitchView from '@/sections/_examples/mui/switch-view';

// ----------------------------------------------------------------------

export default function SwitchPage() {
  return (
    <>
      <Helmet>
        <title> MUI: Switch</title>
      </Helmet>

      <SwitchView />
    </>
  );
}
