import React,{Component} from 'react'
import BankDetails from './BankDetails'
import CompanyDetails from './CompanyDetails'
import EmployeeDetails from './EmployeeDetails'
import EmploymentDetails from './EmploymentDetails'
import './RegisterForm.css'
import UserAddress from './UserAddress'
import UserDetails from './UserDetails'
import UserPassword from './UserPassword'


class  RegisterForm extends Component {
    state = {
        step:1,
        fullName:'',
        email:'',
        phoneNumber:'',
        fullAddress:'',
        image:'',
        gender:'',
        password:'',
        otp:''
 

    }
    nextStep = ()=>{
        const {step} = this.state;
        this.setState({
            step : step + 1
        })
    }
    prevStep = ()=>{
        const {step} = this.state;
        this.setState({
            step : step - 1
        })
    }
    // Handle field change
    handleChange = input => e =>{
        this.setState({[input]:e.target.value})
    }

    render(){
        const {step} = this.state;
        const {fullName,email,phoneNumber,fullAddress,image,gender,password,otp} = this.state;
        const values = {fullName,email,phoneNumber,fullAddress,image,gender,password,otp};

        switch(step){
            case 1:
                return <UserDetails
                    nextStep = {this.nextStep}
                    handleChange = {this.handleChange}
                    values={values}
                />
            case 2:
                return <UserAddress
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange = {this.handleChange}
                    values={values}
                />
            case 3: 
                return <UserPassword
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange = {this.handleChange}
                    values={values}
                />
            case 4: 
                return <EmploymentDetails
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange = {this.handleChange}
                    values={values}
                />
            case 5: 
                return <EmployeeDetails

                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange = {this.handleChange}
                    values={values}
                />
            case 6: 
                return <CompanyDetails
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange = {this.handleChange}
                    values={values}
                />
            case 7: 
                return <BankDetails
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange = {this.handleChange}
                    values={values}
                />
            default:
                return 'Hello World'
        }
}
}

export default RegisterForm
