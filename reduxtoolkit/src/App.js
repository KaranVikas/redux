import { useSelector } from 'react-redux';
import Account from './components/Account'
import Bonus from './components/Bonus'

function App() {
  
    const amount = useSelector(state=>state.account.amount)
    const points = useSelector(state=>state.bonus.amount)

  return (
    <div className="App">
      <h4>App</h4>
        <h3>Current Amount: {amount}</h3>
        <h3>Total Bonus: {points} </h3>

        <Account></Account> 
        <Bonus></Bonus>
    </div>
  );
}

export default App;
