import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css'

import UserList from './UserList';

class App extends React.Component {
  state={
    value: '',
    users: [],
    isLoadnig: true
  }
  


  handleInput = (e) =>{
    this.setState({
      value: e.target.value,

    })
    console.log(this.state.value)

    fetch('https://randomuser.me/api/?results=50')
      .then(response => {
        if(response.ok) {
          // console.log(response);
          return response;
        }
        throw Error(response.status)
      })
      .then(response => response.json())
      .then(data => {
        this.setState({
          users: data.results,
          isLoadnig: false
        })
      })
      .catch(error => console.log(error + 'coś poszło nie tak'))
  }

  render(){
    const {users} = this.state;
    console.log('State : ',this.state);
    

  return (
    <div className="App">
      <h1>Korespondencja Przychodząca</h1>
      <input onChange={this.handleInput}></input>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Person</th>
            <th scope="col">Email</th>
            <th scope="col">Birthday</th>
            <th scope="col">Address</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr> */}


          <UserList users = {users} />

        </tbody>
      </table>
    </div>
  );
}
}
export default App;
