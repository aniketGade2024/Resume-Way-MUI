import { Helmet } from 'react-helmet-async';
import { CalendarView } from '@/sections/calendar/view';

// ----------------------------------------------------------------------

export default function CalendarPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Calendar</title>
      </Helmet>

      <CalendarView />
    </>
  );
}
