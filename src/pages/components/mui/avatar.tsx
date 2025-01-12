import { Helmet } from 'react-helmet-async';
import AvatarView from '@/sections/_examples/mui/avatar-view';

// ----------------------------------------------------------------------

export default function AvatarPage() {
  return (
    <>
      <Helmet>
        <title> MUI: Avatar</title>
      </Helmet>

      <AvatarView />
    </>
  );
}
