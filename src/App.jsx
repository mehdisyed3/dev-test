import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, deleteItem } from './redux/actions';
import './index.css';

function App() {
	const [text, setText] = useState('');
	const state = useSelector((state) => state);
	const dispatch = useDispatch();

	const displayWishList = state.wishList.map((wish, i) => (
		<p onClick={() => dispatch(deleteItem(wish))} key={i}>
			{wish}
		</p>
	));

	// this code block will only allow a wish to be added if the input value is not undefined i.e ""
	const addToState = (e) => {
		if (text[0] !== undefined) {
			dispatch(addItem(text));
			setText('');
		}
	};

	const submitHandler = () => {
		// console.log("submitting,", state.wishList)

		// this block of code is so that user can't submit an empty wishList
		if (state.wishList.length > 0) {
			dispatch({ type: '' });
			alert('Wish list submitted to Santa!');
		}
	};

	return (
		<div className='app'>
			<div className='app__container'>
				<h3>MY WISHLIST</h3>
				<div className='app__display'>{displayWishList}</div>

				<input
					className='app__input '
					type='text'
					onChange={(e) => setText(e.target.value.trimStart())}
					value={text}
				/>
				<button className='app__buttonOne' onClick={addToState}>
					Add
				</button>

				<button className='app__buttonTwo' onClick={submitHandler}>
					Submit
				</button>
			</div>
		</div>
	);
}

export default App;
