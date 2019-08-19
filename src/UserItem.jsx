import React, { Component ,useEffect} from 'react'


 export default class UserItem extends Component {    

    render(){

        console.log('Props : ', this.props);
        const {user} = this.props;
        return (
            <tr>
                <td>{user.name.first} {user.name.last}</td>
                <td>{user.email}</td>
                <td>{user.dob.date}</td>
                <td>{user.location.city}</td>
                <td>{user.phone}</td>
              </tr>
        )
    }

}


