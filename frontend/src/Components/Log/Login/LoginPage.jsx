import React, {Component} from 'react'
import auth from '../../../authorization/auth';
import "./LoginPage.scss"

class LoginPage extends Component {

  constructor(props){
    super(props);
    this.state={
      name:"",
      password:"",
      color:"", 
      continue: true
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }


  render () {
    return (
      <div className="LoginPage">
        <div className="loginContainer" onKeyPress={this.keyPressed}>
        <h2>Create or Sign in to your account</h2>
          <div className="form__group field">
            <input type="input" className="form__field" name='name' id="name" value={this.state.name} onChange={e=> this.handleChange(e)}/>
            <label htmlFor="name" className="form__label">Username</label>
          </div>
          <div className="form__group field">
            <input type="input" className="form__field" name='password' id="password" value={this.state.password} onChange={e=> this.handleChange(e)}/>
            <label htmlFor="password" className="form__label">Password</label>
          </div>
          <div className="form__group field">
            <input type="input" className="form__field" name='color' id="color" value={this.state.color} onChange={e=> this.handleChange(e)}/>
            <label htmlFor="color" className="form__label"> <span style={{fontStyle:'italic'}}>(Optional)</span> Name color  <span style={{color:'#E92750'}}>default: Red(E92750) </span>  </label>
          </div>
          <button className="login-button"  onKeyPress={this.onKeyPress} onClick={this.verifyInput}>Login</button>
        </div>
      </div>
    )
    }

    submitLogin =()=>{
      auth.login(this.state.name,this.state.password, this.state.color,()=>{
        this.props.history.push("/chat")
      })
    }
    
    verifyInput=()=>{
      if (this.state.name !== '' && this.state.password !== ''  ){
        this.submitLogin();
      }
    }

    keyPressed =(event)=>{
      if (event.key === "Enter"){
        this.verifyInput();
      }
    }
}

export default LoginPage
