import { Helmet } from 'react-helmet-async';
import DataGridView from '@/sections/_examples/mui/data-grid-view';

// ----------------------------------------------------------------------

export default function DataGridPage() {
  return (
    <>
      <Helmet>
        <title> MUI: DataGrid</title>
      </Helmet>

      <DataGridView />
    </>
  );
}
