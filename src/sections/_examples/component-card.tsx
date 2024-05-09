import { m } from 'framer-motion';
import Image from '@/components/image';
import Label from '@/components/label';
import { RouterLink } from '@/routes/components';
import { varHover, varTranHover } from '@/components/animate';

import Paper from '@mui/material/Paper';
import { alpha } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

// ----------------------------------------------------------------------

type Props = {
  item: {
    name: string;
    icon: string;
    href: string;
    category?: string;
  };
};

export default function ComponentCard({ item }: Props) {
  const { name, icon, href, category } = item;

  return (
    <Paper
      component={RouterLink}
      href={href}
      variant="outlined"
      sx={{
        overflow: 'hidden',
        position: 'relative',
        textDecoration: 'none',
        borderColor: (theme) => alpha(theme.palette.grey[500], 0.08),
      }}
    >
      {category && (
        <Label
          color={category === 'MUI X' ? 'info' : 'default'}
          sx={{
            top: 4,
            right: 4,
            zIndex: 9,
            position: 'absolute',
          }}
        >
          {category}
        </Label>
      )}

      <CardActionArea
        component={m.div}
        whileHover="hover"
        sx={{
          p: 2.5,
          borderRadius: 0,
          color: 'text.secondary',
          bgcolor: (theme) => alpha(theme.palette.grey[500], 0.04),
        }}
      >
        <m.div variants={varHover(1.1)} transition={varTranHover()}>
          <Image alt={name} src={icon} />
        </m.div>
      </CardActionArea>

      <Typography variant="subtitle2" sx={{ p: 2, textAlign: 'center' }}>
        {name}
      </Typography>
    </Paper>
  );
}
