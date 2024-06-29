import  FriendListItem  from '../FriendListItem/FriendListItem';
import s from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    // <div className={s.FriendList}>
      <ul className={s.friends}>
            {friends.map(friend => {
            return (
                <FriendListItem
                key={friend.id}
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
                />
                );
            })}
        </ul>
    // </div>
  );
};
export default FriendList;