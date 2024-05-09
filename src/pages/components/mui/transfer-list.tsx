import { Helmet } from 'react-helmet-async';
import TransferListView from '@/sections/_examples/mui/transfer-list-view';

// ----------------------------------------------------------------------

export default function TransferListPage() {
  return (
    <>
      <Helmet>
        <title> MUI: Transfer List</title>
      </Helmet>

      <TransferListView />
    </>
  );
}
