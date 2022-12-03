import { Profile } from './Profile/profile';
import user from 'data/user.json';
import { Statistics } from './Statistics/Statistics';
import data from 'data/data.json';
import { FriendList } from './Friends/FriendList';
import friends from 'data/friends.json';
import { TransactionHistory } from './Transaction/TransactionHistory';
import transactions from 'data/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
