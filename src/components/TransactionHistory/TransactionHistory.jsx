import React from 'react'
import styles from './TransactionHistory.module.css'
import capitalizeFirstLetter from './capitalizeFirstLetter'

const TransactionHistory = ({ items }) => {
	return (
		<table className={styles.transactionTable}>
			<thead>
				<tr>
					<th>Type</th>
					<th>Amount</th>
					<th>Currency</th>
				</tr>
			</thead>
			<tbody>
				{items.map(({ id, type, amount, currency }) => (
					<tr key={id}>
						<td>{capitalizeFirstLetter(type)}</td>
						<td>{amount}</td>
						<td>{currency}</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}

export default TransactionHistory
