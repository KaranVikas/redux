import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';

//action constants
const init = 'init'
const inc = 'increment';
const dec = 'decrement'
const incByAmt = 'incrementByAmount';

//store

const store = createStore(reducer, applyMiddleware(logger.default, thunk.default))

// reducer 
function reducer(state = { amount: 1 }, action) {
	switch (action.type) {
		case init:
			return {amount: action.payload}
		case inc:
			return { amount: state.amount + 1 }
		case dec:
			return { amount: state.amount - 1 }
		case incByAmt:
			return { amount: state.amount + action.payload }
		default:
		return state;
	}
}

// action creators
function getUser(id) {
	return async (dispatch, getState) => {
	const {data} = await axios.get(`http://localhost:3000/accounts/${id}`)
	dispatch(initUser(data.amount));
	}
}

function initUser(value){
	return { type: init, payload: value}
}

function increment(){
	return {type:inc}
}

function decrement(){
	return {type:dec}
}

function incrementByAmount(value){
	return {type: incByAmt , payload:value}
}

setTimeout(() => {
	store.dispatch(getUser(2));
}, 2000);

