import { useParams } from '@/routes/hooks';
import { Helmet } from 'react-helmet-async';
import { ProductDetailsView } from '@/sections/product/view';

// ----------------------------------------------------------------------

export default function ProductDetailsPage() {
  const params = useParams();

  const { id } = params;

  return (
    <>
      <Helmet>
        <title> Dashboard: Product Details</title>
      </Helmet>

      <ProductDetailsView id={`${id}`} />
    </>
  );
}
