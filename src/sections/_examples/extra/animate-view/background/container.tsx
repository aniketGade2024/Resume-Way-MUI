import { _mock } from '@/_mock';
import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import getVariant from '../get-variant';

// ----------------------------------------------------------------------

type ContainerViewProps = {
  selectVariant: string;
};

export default function ContainerView({ selectVariant, ...other }: ContainerViewProps) {
  const isKenburns = selectVariant.includes('kenburns');

  return (
    <Paper
      sx={{
        height: 480,
        width: '100%',
        overflow: 'hidden',
        boxShadow: (theme) => theme.customShadows.z8,
      }}
      {...other}
    >
      {isKenburns ? (
        <Box
          component={m.img}
          src={_mock.image.cover(7)}
          {...getVariant(selectVariant)}
          sx={{ width: 1, height: 1, objectFit: 'cover' }}
        />
      ) : (
        <Box component={m.div} {...getVariant(selectVariant)} sx={{ height: 1, width: 1 }} />
      )}
    </Paper>
  );
}
