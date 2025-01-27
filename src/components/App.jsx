import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import user from './user.json';
import data from './data.json';
import Friendlist from "./FriendList/Friendlist";
import friends from './friends.json';
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import transactions from "./transactions.json";

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics stats={data} />
      <Friendlist friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

