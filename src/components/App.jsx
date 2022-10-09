import { Profile } from "./Profile";
import { Statistics } from "./Statistics";
import { FriendList } from "./FriendList";
import { TransactionHistory } from "./TransactionHistory";
// import user from "../user.json"
import user from "../data/user.json"
import data from "../data/data.json"
import friends from "../data/friends.json"
import transactions from "../data/transactions.json"
import { Body } from "./style/base.styled";



export const App = () => {
  return (
    <Body>
       <Profile 
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}/>
        <Statistics title="Upload stats" stats={data}/>
        <FriendList friends={friends}/>
        <TransactionHistory items={transactions} />
    </Body>
  );
};
