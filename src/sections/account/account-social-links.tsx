import { useForm } from 'react-hook-form';
import Iconify from '@/components/iconify';
import { IUserSocialLink } from '@/types/user';
import { useSnackbar } from '@/components/snackbar';
import FormProvider, { RHFTextField } from '@/components/hook-form';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import LoadingButton from '@mui/lab/LoadingButton';
import InputAdornment from '@mui/material/InputAdornment';

// ----------------------------------------------------------------------

type Props = {
  socialLinks: IUserSocialLink;
};

export default function AccountSocialLinks({ socialLinks }: Props) {
  const { enqueueSnackbar } = useSnackbar();

  const defaultValues = {
    facebook: socialLinks.facebook,
    instagram: socialLinks.instagram,
    linkedin: socialLinks.linkedin,
    twitter: socialLinks.twitter,
  };

  const methods = useForm({
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      enqueueSnackbar('Update success!');
      console.info('DATA', data);
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Stack component={Card} spacing={3} sx={{ p: 3 }}>
        {Object.keys(socialLinks).map((link) => (
          <RHFTextField
            key={link}
            name={link}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Iconify
                    width={24}
                    icon={
                      (link === 'facebook' && 'eva:facebook-fill') ||
                      (link === 'instagram' && 'ant-design:instagram-filled') ||
                      (link === 'linkedin' && 'eva:linkedin-fill') ||
                      (link === 'twitter' && 'eva:twitter-fill') ||
                      ''
                    }
                    color={
                      (link === 'facebook' && '#1877F2') ||
                      (link === 'instagram' && '#DF3E30') ||
                      (link === 'linkedin' && '#006097') ||
                      (link === 'twitter' && '#1C9CEA') ||
                      ''
                    }
                  />
                </InputAdornment>
              ),
            }}
          />
        ))}

        <LoadingButton type="submit" variant="contained" loading={isSubmitting} sx={{ ml: 'auto' }}>
          Save Changes
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
}
