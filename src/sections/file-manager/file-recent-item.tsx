import Iconify from '@/components/iconify';
import { IFileManager } from '@/types/file';
import { useState, useCallback } from 'react';
import { fData } from '@/utils/format-number';
import { fDateTime } from '@/utils/format-time';
import { useBoolean } from '@/hooks/use-boolean';
import { useSnackbar } from '@/components/snackbar';
import { useResponsive } from '@/hooks/use-responsive';
import FileThumbnail from '@/components/file-thumbnail';
import { useCopyToClipboard } from '@/hooks/use-copy-to-clipboard';
import CustomPopover, { usePopover } from '@/components/custom-popover';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import Stack, { StackProps } from '@mui/material/Stack';
import AvatarGroup, { avatarGroupClasses } from '@mui/material/AvatarGroup';

import FileManagerShareDialog from './file-manager-share-dialog';
import FileManagerFileDetails from './file-manager-file-details';

// ----------------------------------------------------------------------

interface Props extends StackProps {
  file: IFileManager;
  onDelete: VoidFunction;
}

export default function FileRecentItem({ file, onDelete, sx, ...other }: Props) {
  const { enqueueSnackbar } = useSnackbar();

  const { copy } = useCopyToClipboard();

  const smUp = useResponsive('up', 'sm');

  const [inviteEmail, setInviteEmail] = useState('');

  const popover = usePopover();

  const share = useBoolean();

  const details = useBoolean();

  const favorite = useBoolean(file.isFavorited);

  const handleChangeInvite = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setInviteEmail(event.target.value);
  }, []);

  const handleCopy = useCallback(() => {
    enqueueSnackbar('Copied!');
    copy(file.url);
  }, [copy, enqueueSnackbar, file.url]);

  const renderAction = (
    <Box
      sx={{
        top: 0,
        right: 8,
        position: 'absolute',
        ...(smUp && {
          flexShrink: 0,
          position: 'unset',
        }),
      }}
    >
      <Checkbox
        color="warning"
        icon={<Iconify icon="eva:star-outline" />}
        checkedIcon={<Iconify icon="eva:star-fill" />}
        checked={favorite.value}
        onChange={favorite.onToggle}
      />

      <IconButton color={popover.open ? 'inherit' : 'default'} onClick={popover.onOpen}>
        <Iconify icon="eva:more-vertical-fill" />
      </IconButton>
    </Box>
  );

  const renderText = (
    <ListItemText
      onClick={details.onTrue}
      primary={file.name}
      secondary={
        <>
          {fData(file.size)}
          <Box
            sx={{
              mx: 0.75,
              width: 2,
              height: 2,
              borderRadius: '50%',
              bgcolor: 'currentColor',
            }}
          />
          {fDateTime(file.modifiedAt)}
        </>
      }
      primaryTypographyProps={{
        noWrap: true,
        typography: 'subtitle2',
      }}
      secondaryTypographyProps={{
        mt: 0.5,
        component: 'span',
        alignItems: 'center',
        typography: 'caption',
        color: 'text.disabled',
        display: 'inline-flex',
      }}
    />
  );

  const renderAvatar = (
    <AvatarGroup
      max={3}
      sx={{
        [`& .${avatarGroupClasses.avatar}`]: {
          width: 24,
          height: 24,
          '&:first-of-type': {
            fontSize: 12,
          },
        },
      }}
    >
      {file.shared?.map((person) => (
        <Avatar key={person.id} alt={person.name} src={person.avatarUrl} />
      ))}
    </AvatarGroup>
  );

  return (
    <>
      <Stack
        component={Paper}
        variant="outlined"
        spacing={1}
        direction={{ xs: 'column', sm: 'row' }}
        alignItems={{ xs: 'unset', sm: 'center' }}
        sx={{
          borderRadius: 2,
          bgcolor: 'unset',
          cursor: 'pointer',
          position: 'relative',
          p: { xs: 2.5, sm: 2 },
          '&:hover': {
            bgcolor: 'background.paper',
            boxShadow: (theme) => theme.customShadows.z20,
          },
          ...sx,
        }}
        {...other}
      >
        <FileThumbnail file={file.type} sx={{ width: 36, height: 36, mr: 1 }} />

        {renderText}

        {!!file?.shared?.length && renderAvatar}

        {renderAction}
      </Stack>

      <CustomPopover
        open={popover.open}
        onClose={popover.onClose}
        arrow="right-top"
        sx={{ width: 160 }}
      >
        <MenuItem
          onClick={() => {
            popover.onClose();
            handleCopy();
          }}
        >
          <Iconify icon="eva:link-2-fill" />
          Copy Link
        </MenuItem>

        <MenuItem
          onClick={() => {
            popover.onClose();
            share.onTrue();
          }}
        >
          <Iconify icon="solar:share-bold" />
          Share
        </MenuItem>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <MenuItem
          onClick={() => {
            popover.onClose();
            onDelete();
          }}
          sx={{ color: 'error.main' }}
        >
          <Iconify icon="solar:trash-bin-trash-bold" />
          Delete
        </MenuItem>
      </CustomPopover>

      <FileManagerFileDetails
        item={file}
        favorited={favorite.value}
        onFavorite={favorite.onToggle}
        onCopyLink={handleCopy}
        open={details.value}
        onClose={details.onFalse}
        onDelete={() => {
          details.onFalse();
          onDelete();
        }}
      />

      <FileManagerShareDialog
        open={share.value}
        shared={file.shared}
        inviteEmail={inviteEmail}
        onChangeInvite={handleChangeInvite}
        onCopyLink={handleCopy}
        onClose={() => {
          share.onFalse();
          setInviteEmail('');
        }}
      />
    </>
  );
}
