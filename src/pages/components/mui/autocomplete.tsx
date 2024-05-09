import { Helmet } from 'react-helmet-async';
import AutocompleteView from '@/sections/_examples/mui/autocomplete-view';

// ----------------------------------------------------------------------

export default function AutocompletePage() {
  return (
    <>
      <Helmet>
        <title> MUI: Autocomplete</title>
      </Helmet>

      <AutocompleteView />
    </>
  );
}
