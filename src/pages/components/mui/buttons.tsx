import { Helmet } from 'react-helmet-async';
import ButtonView from '@/sections/_examples/mui/button-view';

// ----------------------------------------------------------------------

export default function ButtonPage() {
  return (
    <>
      <Helmet>
        <title> MUI: Button</title>
      </Helmet>

      <ButtonView />
    </>
  );
}
