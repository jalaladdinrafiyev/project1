import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpense = (props) => {
	let [isEditing, setIsEditing] = useState(false);
	const onSaveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString()
		};
		props.onAddExpense(expenseData);
		setIsEditing(false);
	};

	const clickHandler = () => {
		setIsEditing(true);
	};

	const stopEditingHandler = () => {
		setIsEditing(false);
	};

	if (isEditing) {
		return (
			<div className='new-expense'>
				<ExpenseForm
					onSaveExpenseData={onSaveExpenseDataHandler}
					onCancel={stopEditingHandler}
				/>
			</div>
		);
	} else {
		return (
			<div className='new-expense'>
				<button onClick={clickHandler}>Add New Expense</button>
			</div>
		);
	}
};

export default NewExpense;
