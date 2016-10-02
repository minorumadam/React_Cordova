import React from 'react';
import ReactDOM from 'react-dom';
import {Page,
  Toolbar,
  ToolbarButton,
  BackButton,
  Input,
  Password,Button} from 'react-onsenui';




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
          <input disabled={false} value={this.state.firstname}  onChange={(event) => {
            this.setState({firstname: event.target.value})} }  placeholder='First Name*' />

            <input disabled={false} value={this.state.lastname}  onChange={(event) => {
            this.setState({lastname: event.target.value})} }  placeholder='Last Name*'/>

            <input disabled={false} value={this.state.username}  onChange={(event) => {
            this.setState({username: event.target.value})} }  placeholder='Username*'/>

            <input disabled={false} value={this.state.email}  onChange={(event) => {
            this.setState({email: event.target.value})} }  placeholder='Email Address*' />

            <input type="password" disabled={false} value={this.state.password}  onChange={(event) => {
            this.setState({password: event.target.value})} }  placeholder='Password*'/>

            <input type="password" disabled={false} value={this.state.confirm}  onChange={(event) => {
            this.setState({confirm: event.target.value})} }  placeholder='Confirm Password*'/>
            <Button>SUBMIT</Button>
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
        
      </Page>
    );
  }
}