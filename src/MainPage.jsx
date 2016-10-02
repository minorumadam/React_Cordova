import React from 'react';
import ReactDOM from 'react-dom';
import {Page,
  Toolbar,
  ToolbarButton,
  BackButton,
  Input,
  Password,Button} from 'react-onsenui';

import Formsy from 'formsy-react';

const MyOwnInput = React.createClass({

    // Add the Formsy Mixin
    mixins: [Formsy.Mixin],

    // setValue() will set the value of the component, which in
    // turn will validate it and the rest of the form
    changeValue(event) {
      this.setValue(event.currentTarget.value);
    },

    render() {
      // Set a specific className based on the validation
      // state of this component. showRequired() is true
      // when the value is empty and the required prop is
      // passed to the input. showError() is true when the
      // value typed is invalid
      const className = this.showRequired() ? 'required' : this.showError() ? 'error' : null;

      // An error message is returned ONLY if the component is invalid
      // or the server has returned an error message
      const errorMessage = this.getErrorMessage();

      return (
        <span className={className}>
          <input type="text" onChange={this.changeValue} value={this.getValue()} placeholder="Email Address*"/>
          <span>{errorMessage}</span>
        </span>
      );
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
      <Page>
      <Formsy.Form onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
        
        <h3>
        Join the Action Sports Network
        </h3>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque nibh, consequat in orci id, cursurs auctor tortor. Fusce viverra bibendum erat, non rhoncus mauris interdum in. In sit amet vehicula diam.
        </p>
        <h3>
        Join With Your Facebook Account
        </h3>
        <h4>
        Or
        </h4>
        <h3>
        Fill Out The Form Below
        </h3>
        <div class="row">
        <input type="text" disabled={false} value={this.state.firstname}  onChange={(event) => {
        this.setState({firstname: event.target.value})} }  placeholder='First Name*' />

        <input type="text" disabled={false} value={this.state.lastname}  onChange={(event) => {
        this.setState({lastname: event.target.value})} }  placeholder='Last Name*'/>
        </div>
        <input type="text" disabled={false} value={this.state.username}  onChange={(event) => {
        this.setState({username: event.target.value})} }  placeholder='Username*'/>

        <MyOwnInput name="email" validations="isEmail" validationError="This is not a valid email" required/>
        <div class="row">
        <input type="password" disabled={false} value={this.state.password}  onChange={(event) => {
        this.setState({password: event.target.value})} }  placeholder='Password*'/>

        <input type="password" disabled={false} value={this.state.confirm}  onChange={(event) => {
        this.setState({confirm: event.target.value})} }  placeholder='Confirm Password*'/>

        <button type="submit">SUBMIT</button>
        </div>
        {
          [0].map((idx) => (
            <div>
              <input
                type='checkbox'
                onChange={this.handleCheckbox.bind(this, idx)}
                checked={this.state.selected.indexOf(idx) >= 0}
              />
              <span>I have read and agree to the <u>terms of service</u>.<sup>*</sup></span>
            </div>
          ))
        }
         </Formsy.Form>
      </Page>
    );
  }
}