import { paths } from '@/routes/paths';
import Iconify from '@/components/iconify';
import { useState, useCallback } from 'react';
import { useSnackbar } from '@/components/snackbar';
import { useDoubleClick } from '@/hooks/use-double-click';
import CustomBreadcrumbs from '@/components/custom-breadcrumbs';
import ComponentHero from '@/sections/_examples/component-hero';
import { useCopyToClipboard } from '@/hooks/use-copy-to-clipboard';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';

// ----------------------------------------------------------------------

export default function CopyToClipboardView() {
  const { enqueueSnackbar } = useSnackbar();

  const { copy } = useCopyToClipboard();

  const [value, setValue] = useState('https://www.npmjs.com/package/');

  const textOnClick = `Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
  Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat
  dolor lectus quis orci. Cras non dolor. Praesent egestas neque eu enim. Ut varius
  tincidunt libero. Fusce fermentum odio nec arcu. Etiam rhoncus. Nulla sit amet est.
  Donec posuere vulputate arcu. Vestibulum ullamcorper mauris at ligula. Praesent ut
  ligula non mi varius sagittis. Pellentesque posuere. Praesent adipiscing. Sed
  libero. Duis leo. Nulla porta dolor.`;

  const onCopy = useCallback(
    (text: string) => {
      if (text) {
        enqueueSnackbar('Copied!');
        copy(text);
      }
    },
    [copy, enqueueSnackbar]
  );

  const handleClick = useDoubleClick({
    doubleClick: () => onCopy(textOnClick),
  });

  const handleChange = useCallback((event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  }, []);

  return (
    <>
      <ComponentHero>
        <CustomBreadcrumbs
          heading="Copy To Clipboard"
          links={[{ name: 'Components', href: paths.components }, { name: 'Copy To Clipboard' }]}
        />
      </ComponentHero>

      <Container sx={{ my: 10 }}>
        <Card sx={{ p: 5 }}>
          <Box
            display="grid"
            gridTemplateColumns={{ xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
            gap={5}
          >
            <Stack spacing={2}>
              <Typography variant="overline" sx={{ color: 'text.secondary' }}>
                on Change
              </Typography>

              <TextField
                fullWidth
                value={value}
                onChange={handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Tooltip title="Copy">
                        <IconButton onClick={() => onCopy(value)}>
                          <Iconify icon="eva:copy-fill" width={24} />
                        </IconButton>
                      </Tooltip>
                    </InputAdornment>
                  ),
                }}
              />
            </Stack>

            <Stack spacing={2}>
              <Typography variant="overline" sx={{ color: 'text.secondary' }}>
                on Double Click
              </Typography>

              <Typography onClick={handleClick}>{textOnClick}</Typography>
            </Stack>
          </Box>
        </Card>
      </Container>
    </>
  );
}
