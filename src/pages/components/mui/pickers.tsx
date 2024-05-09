import { Helmet } from 'react-helmet-async';
import PickerView from '@/sections/_examples/mui/picker-view';

// ----------------------------------------------------------------------

export default function PickerPage() {
  return (
    <>
      <Helmet>
        <title> MUI: Picker</title>
      </Helmet>

      <PickerView />
    </>
  );
}
