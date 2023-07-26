import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementByAmount } from '../slices/accountSlice'

const Account = () => {
  

  const dispatch = useDispatch()
  const amount = useSelector(state => state.account.amount)

  return (
    <div>
      <div className="card">
        <div className="container">
          <h4> Bonus Component</h4>
          <h3>Amount: ${amount}</h3>
        </div>

        <button onClick={() => dispatch(increment)}>increment</button>
        <button onClick={() => dispatch(decrement)}>decrement</button>
        <button onClick={() => dispatch(incrementByAmount)}>incrementByAmount</button>



      </div>
    </div>
  )
}

export default Account