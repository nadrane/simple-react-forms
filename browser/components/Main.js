import React from 'react';

function UserList({users}) {
  return (
  <div>
    {users.map((user, i) =><div key={i} className="col-xs-12">{user}</div>)}
  </div>
  );
}

class UserForm extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <div className="container">
          <div className="errors">
          </div>
          <form>
            <div className="form-group">
              <label>Enter username</label>
              <input className="form-control" name="username" />
            </div>
            <div className="form-group">
              <label>Enter password</label>
              <input className="form-control" name="password" />
            </div>
            <div className="form-group">
              <label>Confirm password</label>
              <input className="form-control" name="confirm" />
            </div>
            <button className="btn btn-primary" type="submit">Make User</button>
          </form>
          <div className="row">
          </div>
        </div>
      );
    }
  }

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <UserForm />
    );
  }
}

export default Main;