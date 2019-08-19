import React, { Component } from 'react'
import UserItem from './UserItem';

export default class UserList extends Component {

    render(){
       
        const {users} = this.props;
        const userList = users.map((user,index) => (<UserItem key={index} user={user}/>))
        console.log('UserList : ',userList);
        

        return(
            <>
                {userList}
            </>
        )
    }

}
