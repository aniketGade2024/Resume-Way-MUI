import { Helmet } from 'react-helmet-async';
import PaginationView from '@/sections/_examples/mui/pagination-view';

// ----------------------------------------------------------------------

export default function PaginationPage() {
  return (
    <>
      <Helmet>
        <title> MUI: Pagination</title>
      </Helmet>

      <PaginationView />
    </>
  );
}
