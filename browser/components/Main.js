import React from 'react';

class UserForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: {value: '', dirty: false},
        password: {value: '', dirty: false},
        confirm: {value: '', dirty: false}
      };
      this.handleChange = this.handleChange.bind(this);
      this.isFormValid = this.isFormValid.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    isFormValid() {
      return this.isUsernameValid() && this.arePasswordsSame();
    }

    handleChange(e) {
      const field = e.target.name;
      const newField = {value: e.target.value, dirty: true};
      this.setState({[field]: newField});
    }

    handleSubmit(e) {
      e.preventDefault();
      if (this.isFormValid()) {
        this.props.updateUsers(this.state.username.value);
        this.setState({
          username: {value: '', dirty: false},
          password: {value: '', dirty: false},
          confirm: {value: '', dirty: false}
        });
      }
    }

    isUsernameValid() {
      return this.state.username.value.length !== 0;
    }

    showUsernameError() {
      if (this.state.username.dirty) {
        return !this.isUsernameValid();
      } else {
        return false;
      }
    }

    arePasswordsSame() {
      return (this.state.password.value === this.state.confirm.value);
    }

    showPasswordError() {
      if (this.state.password.dirty && this.state.confirm.dirty) {
        return !this.arePasswordsSame();
      } else {
        return false;
      }
    }

    render() {
      return (
        <div className="container">
          <div className="error">
            {this.showUsernameError() ? <p>Username must not be blank</p> : null}
            {this.showPasswordError() ? <p>Passwords must be the same</p> : null}
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Enter username</label>
              <input onChange={this.handleChange} className="form-control" name="username" value={this.state.username.value}/>
            </div>
            <div className="form-group">
              <label>Enter password</label>
              <input onChange={this.handleChange} className="form-control" name="password" value={this.state.password.value}/>
            </div>
            <div className="form-group">
              <label>Confirm password</label>
              <input onChange={this.handleChange} className="form-control" name="confirm" value={this.state.confirm.value}/>
            </div>
            <button disabled={!this.isFormValid()} className="btn btn-primary" type="submit">Make User</button>
          </form>
          <div className="row">
            { this.props.users.map((user, i) => <div key={i} className="col-xs-12">{user}</div> )}
          </div>
        </div>
      );
    }
  }

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {users: []};
    this.updateUsers = this.updateUsers.bind(this);
  }

  updateUsers(username) {
    const currentUsers = this.state.users;
    this.setState({users: [...currentUsers, username]});
  }

  render() {
    return (
      <UserForm updateUsers={this.updateUsers} users={this.state.users} />
    );
  }
}

export default Main;
