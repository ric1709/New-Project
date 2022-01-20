import React from 'react'
import '../css/Filter.css'
function NoteFilter(props) {
	const selectChangeHandler = (e) => {
		props.onChangeFilter(e.target.value)
	}
	return (
		<div>
			<select value={props.selected} onChange={selectChangeHandler}>
				<option value='Monday'>Monday</option>
				<option value='Tuesday'>Tuesday</option>
				<option value='Wednesday'>Wednesday</option>
				<option value='Thursday'>Thursday</option>
				<option value='Friday'>Friday</option>
				<option value='Saturday'>Saturday</option>
				<option value='Sunday'>Sunday</option>
				<option value='All'>Select All</option>
			</select>
		</div>
	)
}

export default NoteFilter
