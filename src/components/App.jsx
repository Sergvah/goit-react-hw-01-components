import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './Friendlist/FriendList';

import data from './Statistics/data.json';
import user from './Profile/user.json';
import friends from './Friendlist/friends.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
    </>
  );
};
