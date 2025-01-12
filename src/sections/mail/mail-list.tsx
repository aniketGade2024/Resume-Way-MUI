import { IMails } from '@/types/mail';
import Iconify from '@/components/iconify';
import Scrollbar from '@/components/scrollbar';
import { useResponsive } from '@/hooks/use-responsive';

import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';

import MailItem from './mail-item';
import { MailItemSkeleton } from './mail-skeleton';

// ----------------------------------------------------------------------

type Props = {
  loading: boolean;
  mails: IMails;
  //
  openMail: boolean;
  onCloseMail: VoidFunction;
  onClickMail: (id: string) => void;
  //
  selectedLabelId: string;
  selectedMailId: string;
};

export default function MailList({
  loading,
  mails,
  //
  openMail,
  onCloseMail,
  onClickMail,
  //
  selectedLabelId,
  selectedMailId,
}: Props) {
  const mdUp = useResponsive('up', 'md');

  const renderSkeleton = (
    <>
      {[...Array(8)].map((_, index) => (
        <MailItemSkeleton key={index} />
      ))}
    </>
  );

  const renderList = (
    <>
      {mails.allIds.map((mailId) => (
        <MailItem
          key={mailId}
          mail={mails.byId[mailId]}
          selected={selectedMailId === mailId}
          onClick={() => {
            onClickMail(mailId);
          }}
        />
      ))}
    </>
  );

  const renderContent = (
    <>
      <Stack sx={{ p: 2 }}>
        {mdUp ? (
          <TextField
            placeholder="Search..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled' }} />
                </InputAdornment>
              ),
            }}
          />
        ) : (
          <Typography variant="h6" sx={{ textTransform: 'capitalize' }}>
            {selectedLabelId}
          </Typography>
        )}
      </Stack>

      <Scrollbar sx={{ px: 2 }}>
        {loading && renderSkeleton}

        {!!mails.allIds.length && renderList}
      </Scrollbar>
    </>
  );

  return mdUp ? (
    <Stack
      sx={{
        width: 320,
        flexShrink: 0,
        borderRadius: 1.5,
        bgcolor: 'background.default',
      }}
    >
      {renderContent}
    </Stack>
  ) : (
    <Drawer
      open={openMail}
      onClose={onCloseMail}
      slotProps={{
        backdrop: { invisible: true },
      }}
      PaperProps={{
        sx: {
          width: 320,
        },
      }}
    >
      {renderContent}
    </Drawer>
  );
}
