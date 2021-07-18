import Index from '../src/components/Index'
import RegisterForm from './components/views/RegisterForm';
import Login from './components/views/Login';
import BuyInsurance from './components/views/BuyInsurance';
import { BrowserRouter, Route} from "react-router-dom";
import MotorInsurance from './components/views/MotorInsurance'
import EmploymentStatus from './components/views/EmploymentStatus'


function App() {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Index}/>
      <Route exact path='/register' component={RegisterForm}/>
      <Route exact path='/login' component={Login} />
      <Route exact path='/buy/motor' component={BuyInsurance} />
      <Route exact path = '/motorinsurance' component={MotorInsurance}/>
      <Route exact path='/status' component={EmploymentStatus}  />
     </BrowserRouter>
  );
}

export default App;
