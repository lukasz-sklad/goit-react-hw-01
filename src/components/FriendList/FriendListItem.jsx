import React from 'react'
import styles from './FriendList.module.css'

const FriendListItem = ({ avatar, name, isOnline }) => {
	return (
		<div className={styles.friend}>
			<img className={styles.avatar} src={avatar} alt={`${name}'s avatar`} width='48' />
			<p className={styles.name}>{name}</p>
			<p className={styles.status} style={{ color: isOnline ? 'green' : 'red' }}>
				{isOnline ? 'Online' : 'Offline'}
			</p>
		</div>
	)
}

export default FriendListItem