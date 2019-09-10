import React from 'react';

import pricingItems from '../../assets/pricing-plan.json';
import userAsset from '../../assets/user';
import statsAsset from '../../assets/stats';
import transactions from '../../assets/transactions.json';

import Profile from '../Profile/Profile';
import Stats from '../Stats/Stats';
import PricingPlan from '../PricingPlan/PricingPlan';
import TransactionHistory from '../TransactionHistory/TransactionHistory';

const App = () => {
  return (
    <div>
      <Profile user={userAsset} />
      <Stats title="Upload stats" stats={statsAsset} />
      <PricingPlan items={pricingItems} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
