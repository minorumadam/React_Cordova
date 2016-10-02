import React from 'react';
import ReactDOM from 'react-dom';
import {Page,
  Toolbar,
  ToolbarButton,
  BackButton,
  Input,
  Password,Button} from 'react-onsenui';
import Validation from 'react-validation';
import validator from 'react-validation';

Object.assign(Validation.rules, {
    // Key name maps the rule 
    required: {
        // Function to validate value 
        rule: (value, component, form) => {
            return value.trim();
        },
        // Function to return hint 
        // You may use current value to inject it in some way to the hint 
        hint: value => {
            return <span className='form-error is-visible'>Required</span>
        }
    },
    email: {
        // Example usage with external 'validator' 
        rule: value => {
            return validator.isEmail(value);
        },
        hint: value => {
            return <span className='form-error is-visible'>{value} isnt an Email.</span>
        }
    },
    // This example shows a way to handle common task - compare two fields for equality 
    password: {
        // rule function can accept 2 extra arguments: 
        // component - current checked component 
        // form - form component which has 'states' inside native 'state' object 
        rule: (value, component, form) => {
            // form.state.states[name] - name of corresponding field 
            let password = form.state.states.password;
            let passwordConfirm = form.state.states.passwordConfirm;
            // isUsed, isChanged - public properties 
            let isBothUsed = password && passwordConfirm && password.isUsed && passwordConfirm.isUsed;
            let isBothChanged = isBothUsed && password.isChanged && passwordConfirm.isChanged;
 
            if (!isBothUsed || !isBothChanged) {
                return true;
            }
 
            return password.value === passwordConfirm.value;
        },
        hint: value => {
            return <span className='form-error is-visible'>Passwords should be equal.</span>
        }
    }
});

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: '',
      lastname: '',
      username: '',
      email: '',
      password:'',
      confirm:'',
      selected: [1]
    };
  }

  handleCheckbox(idx, event) {
    const selected = this.state.selected;

    if (event.target.checked && selected.indexOf(idx) < 0) {
      selected.push(idx);
    }
    else if(!event.target.checked) {
      selected.splice(selected.indexOf(idx), 1);
    }

    this.setState({selected: selected});
  }

  handleRadio(idx, event) {
    if (event.target.checked) {
      this.setState({selected2: idx});
    }
  }

  render() {
    return (
      <Page><Validation.components.Form>
        <div class="mainFrame">
        <h2>
        Join the Action Sports Network
        </h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque nibh, consequat in orci id, cursurs auctor tortor. Fusce viverra bibendum erat, non rhoncus mauris interdum in. In sit amet vehicula diam.
        </p>
        <h2>
        Join With Your Facebook Account
        </h2>
        <h3>
        Or
        </h3>
        <h2>
        Fill Out The Form Below
        </h2>
          <Validation.components.Input disabled={false} value={this.state.firstname} float onChange={(event) => {
            this.setState({firstname: event.target.value})} }  placeholder='First Name*' validations={['required']}/>

            <input disabled={false} value={this.state.lastname} float onChange={(event) => {
            this.setState({lastname: event.target.value})} }  placeholder='Last Name*'></input>

            <input disabled={false} value={this.state.username} float onChange={(event) => {
            this.setState({username: event.target.value})} }  placeholder='Username*'></input>

            <Validation.components.Input disabled={false} value={this.state.email} float onChange={(event) => {
            this.setState({email: event.target.value})} }  placeholder='Email Address*' validations={['email']}/>

            <input type="password" disabled={false} value={this.state.password} float onChange={(event) => {
            this.setState({password: event.target.value})} }  placeholder='Password*'></input>

            <input type="password" disabled={false} value={this.state.confirm} float onChange={(event) => {
            this.setState({confirm: event.target.value})} }  placeholder='Confirm Password*'/>
            <Validation.components.Button >SUBMIT</Validation.components.Button>
        {
          [0].map((idx) => (
            <div>
              <input
                type='checkbox'
                onChange={this.handleCheckbox.bind(this, idx)}
                checked={this.state.selected.indexOf(idx) >= 0}
              />

              I have read and agree to the <u>terms of service</u>.<sup>*</sup>
            </div>
          ))
        }
        </div>
        </Validation.components.Form>
      </Page>
    );
  }
}