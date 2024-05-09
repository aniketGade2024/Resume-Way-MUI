import { Helmet } from 'react-helmet-async';
import EditorView from '@/sections/_examples/extra/editor-view';

// ----------------------------------------------------------------------

export default function EditorPage() {
  return (
    <>
      <Helmet>
        <title> Components: Editor</title>
      </Helmet>

      <EditorView />
    </>
  );
}
