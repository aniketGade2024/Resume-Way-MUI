import { Helmet } from 'react-helmet-async';
import TextfieldView from '@/sections/_examples/mui/textfield-view';

// ----------------------------------------------------------------------

export default function TextfieldPage() {
  return (
    <>
      <Helmet>
        <title> MUI: TextField</title>
      </Helmet>

      <TextfieldView />
    </>
  );
}
