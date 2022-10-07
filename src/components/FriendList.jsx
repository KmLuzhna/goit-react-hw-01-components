import { FriendListItem } from "./FriendListItem"

export const FriendList = ({friends}) => {
    return (
    <ul class="friend-list">
        {friends.map(({ avatar, name, isOnline, id }) => (
            <li class="item">
         <FriendListItem 
          avatar={avatar}
          name={name}
          isOnline={isOnline}
          key={id}
         />
          </li>
        ))}
    </ul>
    )
}