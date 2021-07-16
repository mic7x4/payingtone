import Index from '../src/components/Index'
import RegisterForm from './components/views/RegisterForm';
import Login from './components/views/Login';
import BuyInsurance from './components/views/BuyInsurance';
import { BrowserRouter, Route} from "react-router-dom";
import MotorInsurance from './components/views/MotorInsurance'


function App() {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Index}/>
      <Route exact path='/register' component={RegisterForm}/>
      <Route exact path='/login' component={Login} />
      <Route exact path='/buy/motor' component={BuyInsurance} />
      <Route exact path = '/motorinsurance' component={MotorInsurance}/>
     </BrowserRouter>
  );
}

export default App;
