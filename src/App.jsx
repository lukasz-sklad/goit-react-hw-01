import React from 'react'
import Profile from './components/Profile/Profile'
import FriendList from './components/FriendList/FriendList'
import userData from './data/userData.json' // task1
import friends from './data/friends.json' // task2

const App = () => {
	return (
		<div>
			<Profile
				name={userData.username}
				tag={userData.tag}
				location={userData.location}
				image={userData.avatar}
				stats={userData.stats}
			/>
			<FriendList friends={friends} />
		</div>
	)
}

export default App
