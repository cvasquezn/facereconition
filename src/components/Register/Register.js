import React from "react";
import * as Config from '../../components/Config/Config'

class Register extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email:'',
      password:'',
      name:''
    }
  }

  onNameChange = (event) =>{
    this.setState({ name: event.target.value });
  } //end onEmailChange

  onPasswordChange = (event) =>{
    this.setState({ password: event.target.value });
  }//end onPasswordChange

  onEmailChange = (event) =>{
    this.setState({ email: event.target.value });
  }//end onPasswordChange

  onSubmitSignIn = () => {
    fetch(`${Config.URL_BACKEND}/register` , {
      method:'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      })//end body
    })//end fetch and then handle the response from server
      .then(response => response.json())
      .then(user => {
        if(user.id){
          this.props.loadUser(user);
          this.props.onRouteChange('home');
        }
      })
  }//end onSubmitSignIn


  render(){
    return (
      <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <form className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f4 fw6 ph0 mh0">Register</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                <input 
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                  type="text" 
                  name="name"  
                  id="name"
                  onChange = { this.onNameChange }
                  />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input 
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                  type="email" 
                  name="email-address"  
                  id="email-address"
                  onChange = { this.onEmailChange }
                  />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input 
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                  type="password"
                  name="password" 
                  id="password"
                  onChange = { this.onPasswordChange}
                  />
              </div>
            </fieldset>
            <div className="">
              <input
                onClick = { this.onSubmitSignIn }
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Register"
              />
            </div>
          </form>
        </main>
      </article>
      );
    }//end render
  }


export default Register
