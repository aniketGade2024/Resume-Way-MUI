import { Helmet } from 'react-helmet-async';
import { KanbanView } from '@/sections/kanban/view';

// ----------------------------------------------------------------------

export default function KanbanPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Kanban</title>
      </Helmet>

      <KanbanView />
    </>
  );
}
