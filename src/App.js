import Index from './components/Index'
import RegisterForm from './components/views/RegisterForm';
import Login from './components/views/Login';
import BuyInsurance from './components/views/BuyInsurance';
import { BrowserRouter, Route} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Index}/>
      <Route exact path='/register' component={RegisterForm}/>
      <Route exact path='/login' component={Login} />
      <Route exact path='/buy/motor' component={BuyInsurance} />
     </BrowserRouter>
  );
}

export default App;
