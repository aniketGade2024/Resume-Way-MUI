import { Helmet } from 'react-helmet-async';
import RatingView from '@/sections/_examples/mui/rating-view';

// ----------------------------------------------------------------------

export default function RatingPage() {
  return (
    <>
      <Helmet>
        <title> MUI: Rating</title>
      </Helmet>

      <RatingView />
    </>
  );
}
