import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../slices/bonusSlice'
const Bonus = () => {

    const dispatch = useDispatch()
    const points = useSelector(state=> state.bonus.amount)
   
  return (
    <div>
        <div className="card">
            <div className="container">
                <h4> Bonus Component</h4>
                <h3>Amount: ${points}</h3>
            </div>

            <button onClick={() => dispatch(increment) }>increment</button>

        </div>
    </div>
  )
}

export default Bonus
