import React from 'react'
import NoteItem from './NoteItem'
import { useState } from 'react'
import '../css/Note.css'

function Note(props) {
	const [title, setTitle] = useState('')
	const [date, setDate] = useState('')

	const onChangeTitleHandler = (e) => {
		setTitle(e.target.value)
	}
	const onChangeDateHandler = (e) => {
		setDate(e.target.value)
	}
	const [data, setData] = useState([])
	const onSubmitHandler = (e) => {
		e.preventDefault()
		const obj = {
			title,
			date,
		}
		setData((prevState) => [...prevState, obj])
	}
	return (
		<div>
			<div className='background'>
				<div className='shape'></div>
				<div className='shape'></div>
			</div>
			<form onSubmit={onSubmitHandler}>
				<textarea
					onChange={onChangeTitleHandler}
					value={title}
					placeholder='Massage'
				></textarea>
				<input
					onChange={onChangeDateHandler}
					value={date}
					type='date'
				/>
				<button type='submit'>Submit</button>
			</form>
			<NoteItem data={data} />
		</div>
	)
}

export default Note