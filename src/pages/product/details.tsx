import { useParams } from '@/routes/hooks';
import { Helmet } from 'react-helmet-async';
import { ProductShopDetailsView } from '@/sections/product/view';

// ----------------------------------------------------------------------

export default function ProductShopDetailsPage() {
  const params = useParams();

  const { id } = params;

  return (
    <>
      <Helmet>
        <title> Product: Details</title>
      </Helmet>

      <ProductShopDetailsView id={`${id}`} />
    </>
  );
}
