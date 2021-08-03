import {Wrapper} from './Cart.styles';
import {useQuery} from "react-query";
import * as React from "react";
import {CartItemType} from "../App";

type Props = {
};

const getPurchases = async (): Promise<[]> =>
  await (await fetch(`api/purchase`)).json();

const RecentPurchase: React.FC<Props> = () => {
  const purchaseHistory = getPurchases();
  console.log(purchaseHistory);

  const {data, isLoading, error} = useQuery<any[]>(
      'purchases',
      getPurchases
  );
  console.log("data", data);

  return (
    <Wrapper>
      <h2>Your Recent Purchases</h2>
      {data?.map(purchase => <Wrapper>
        <h2>Purchase</h2>
        {purchase?.map((item: CartItemType) => <>
          <div>
            <h3 data-cy={`data-cy-${item.title}`}>{item.title}</h3>
            <h4>{"Amount: " + item.amount}</h4>
          </div>
        </>)
      }</Wrapper>)}
    </Wrapper>
  );
};

export default RecentPurchase;
