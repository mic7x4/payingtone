import Index from '../src/components/Index'
import RegisterForm from './components/views/RegisterForm';
import Login from './components/views/Login';
import BuyInsurance from './components/views/BuyInsurance';
import { BrowserRouter, Route} from "react-router-dom";
import MotorInsurance from './components/views/MotorInsurance'
import EmploymentStatus from './components/views/EmploymentStatus'
import Insurer from './components/views/Insurer';
import Plan from './components/views/PaymentPlan'
import Payment from './components/views/PaymentMethod'
import Confirmation from './components/views/Confirmation';
import OTP from './components/views/Otp'

function App() {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Index}/>
      <Route exact path='/register' component={RegisterForm}/>
      <Route exact path='/login' component={Login} />
      <Route exact path='/buy/motor' component={BuyInsurance} />
      <Route exact path ='/motorinsurance' component={MotorInsurance}/>
      <Route exact path='/status' component={EmploymentStatus}  />
      <Route exact path='/insurer' component={Insurer}/>
      <Route exact path='/buy/plan' component={Plan}/>
      <Route exact path='/method' component={Payment} />
      <Route exact path='/confirmation' component={Confirmation}/>
      <Route exact path='/otp' component={OTP}/>
     </BrowserRouter>
  );
}

export default App;
