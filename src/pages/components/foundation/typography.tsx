import { Helmet } from 'react-helmet-async';
import { TypographyView } from '@/sections/_examples/foundation';

// ----------------------------------------------------------------------

export default function TypographyPage() {
  return (
    <>
      <Helmet>
        <title> Foundations: Typography</title>
      </Helmet>

      <TypographyView />
    </>
  );
}
