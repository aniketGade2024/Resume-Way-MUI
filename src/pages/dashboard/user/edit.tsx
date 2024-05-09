import { useParams } from '@/routes/hooks';
import { Helmet } from 'react-helmet-async';
import { UserEditView } from '@/sections/user/view';

// ----------------------------------------------------------------------

export default function UserEditPage() {
  const params = useParams();

  const { id } = params;

  return (
    <>
      <Helmet>
        <title> Dashboard: User Edit</title>
      </Helmet>

      <UserEditView id={`${id}`} />
    </>
  );
}
