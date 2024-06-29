import './App.css'
import Profile from './Profile/Profile'
import userData from './userData.json'
import FriendList from './FriendList/FriendList'
import friendList from './friendList.json'

const App = () => {

  return (
    <div
    style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        color: '#010101',
      }}>
      <Profile
       name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friendList} />
    </div>
  )
}

export default App
