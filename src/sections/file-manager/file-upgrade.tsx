import { bgGradient } from '@/theme/css';
import { UpgradeStorageIllustration } from '@/assets/illustrations';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import Stack, { StackProps } from '@mui/material/Stack';

// ----------------------------------------------------------------------

export default function FileUpgrade({ sx, ...other }: StackProps) {
  const theme = useTheme();

  return (
    <Stack
      alignItems="center"
      sx={{
        ...bgGradient({
          direction: '135deg',
          startColor: alpha(theme.palette.primary.light, 0.2),
          endColor: alpha(theme.palette.primary.main, 0.2),
        }),
        p: 5,
        borderRadius: 2,
        backgroundColor: 'common.white',
        ...sx,
      }}
      {...other}
    >
      <UpgradeStorageIllustration />

      <Button
        size="large"
        color="inherit"
        variant="contained"
        sx={{
          mt: 5,
          mb: 2,
          color: 'common.white',
          bgcolor: 'grey.800',
          '&:hover': {
            bgcolor: 'grey.700',
          },
        }}
      >
        Upgrade Plan
      </Button>

      <Typography variant="caption" sx={{ color: 'primary.dark', textAlign: 'center' }}>
        Upgrade your plan and get more space
      </Typography>
    </Stack>
  );
}
