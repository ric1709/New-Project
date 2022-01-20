import React from 'react'
import NoteFilter from './NoteFilter'
import { useState } from 'react'
import NoteDate from './NoteDate'
import '../css/NoteItems.css'

function NoteItem(props) {
	const [filteredData, setFilteredData] = useState('Sunday')
	const filterChangeHandler = (selectedWeek) => {
		setFilteredData(selectedWeek)
	}
	const filteredNote = props.data.filter((notes) => {
		const week = new Date(notes.date)
		return (
			week.toLocaleDateString('en-Us', { weekday: 'long' }) ===
			filteredData
		)
	})
	return (
		<div>
			<NoteFilter
				selected={filteredData}
				onChangeFilter={filterChangeHandler}
			/>
			{filteredNote.map((el) => {
				return (
					<div key={Math.random().toString()}>
						<div className='card'>
							<h4 className='h'>{el.title}</h4>
							<NoteDate data={el.date} />
						</div>
					</div>
				)
			})}
			{filteredData === 'All' && props.data.map((el) => {
				return (
					<div key={Math.random().toString()}>
						<div className='card'>
							<h4 className='h'>{el.title}</h4>
							<NoteDate data={el.date} />
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default NoteItem