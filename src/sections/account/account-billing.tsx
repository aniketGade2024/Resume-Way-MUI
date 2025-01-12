import { IPaymentCard } from '@/types/payment';
import { IAddressItem } from '@/types/address';
import { IUserAccountBillingHistory } from '@/types/user';

import Grid from '@mui/material/Unstable_Grid2';

import AccountBillingPlan from './account-billing-plan';
import AccountBillingPayment from './account-billing-payment';
import AccountBillingHistory from './account-billing-history';
import AccountBillingAddress from './account-billing-address';

// ----------------------------------------------------------------------

type Props = {
  plans: {
    subscription: string;
    price: number;
    primary: boolean;
  }[];
  cards: IPaymentCard[];
  invoices: IUserAccountBillingHistory[];
  addressBook: IAddressItem[];
};

export default function AccountBilling({ cards, plans, invoices, addressBook }: Props) {
  return (
    <Grid container spacing={5} disableEqualOverflow>
      <Grid xs={12} md={8}>
        <AccountBillingPlan plans={plans} cardList={cards} addressBook={addressBook} />

        <AccountBillingPayment cards={cards} />

        <AccountBillingAddress addressBook={addressBook} />
      </Grid>

      <Grid xs={12} md={4}>
        <AccountBillingHistory invoices={invoices} />
      </Grid>
    </Grid>
  );
}
