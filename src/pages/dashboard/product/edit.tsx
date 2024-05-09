import { useParams } from '@/routes/hooks';
import { Helmet } from 'react-helmet-async';
import { ProductEditView } from '@/sections/product/view';

// ----------------------------------------------------------------------

export default function ProductEditPage() {
  const params = useParams();

  const { id } = params;

  return (
    <>
      <Helmet>
        <title> Dashboard: Product Edit</title>
      </Helmet>

      <ProductEditView id={`${id}`} />
    </>
  );
}
