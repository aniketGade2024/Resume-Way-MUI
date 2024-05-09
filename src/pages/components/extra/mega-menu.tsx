import { Helmet } from 'react-helmet-async';
import MegaMenuView from '@/sections/_examples/extra/mega-menu-view';

// ----------------------------------------------------------------------

export default function MegaMenuPage() {
  return (
    <>
      <Helmet>
        <title> Components: Mega Menu</title>
      </Helmet>

      <MegaMenuView />
    </>
  );
}
