import { Helmet } from 'react-helmet-async';
import TooltipView from '@/sections/_examples/mui/tooltip-view';

// ----------------------------------------------------------------------

export default function TooltipPage() {
  return (
    <>
      <Helmet>
        <title> MUI: Tooltip</title>
      </Helmet>

      <TooltipView />
    </>
  );
}
