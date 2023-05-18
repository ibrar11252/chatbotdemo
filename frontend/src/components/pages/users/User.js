import React,{useState,useEffect} from 'react'
import "../../sidebar/sidebar.css"
import { Link } from "react-router-dom";


import "./user.css"
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";




const User = () => {
let count=0;
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    findUsers();
  }, []);

  const findUsers= async ()=>{
    count++;
    console.log('My function find users was called!' + count);

   
const response=await fetch('http://localhost:5000/api/users', {
  method: 'GET',
  headers: {

    'Content-Type': 'application/json',
  },

  
  })
  const userDataArray = [];
  // if(response.status==200){
  //   const users = await response.json();
  //   users.forEach(user => {
  //     console.log(`id: ${user._id}, email: ${user.email}, name: ${user.name}`);
  //   });
  // } 

  if(response.status==200){

  const dataHere=await response.json();



console.log("datahere is "+ dataHere[0].email)
  dataHere.forEach((user) => {
    console.log(`id: ${user._id}, email: ${user.email}, name: ${user.name}`);
    const userObj = {
      name: user.name,
      email: user.email,
      id:user._id
    };
    setUserData(prevUsers => [...prevUsers, userObj]);


   
  });




  //  console.log(userDataArray)
}
  }



// delete a user from database
const handleDeleteUser=async(userId)=>{
  console.log("handle delete called")
  console.log(userId)

 
  const response = await fetch(`http://localhost:5000/api/deleteuser/${userId}`, {
    method: 'DELETE',
  });
  if (response.status==200) {

    console.log("user wll be deleted")
    // const remainingUsers = userData.filter((user) => user._id !== id);
    // setUserData(remainingUsers);
  }


}



  return (
    <div className="container">
    <div className="left-column">
     

<div>
  <div className="sidebar">
    <div className="sidebarWrapper">
      <div className="sidebarMenu">
        <h3 className="sidebarTitle">Dashboard</h3>
        <ul className="sidebarList">
          <Link to="/home" className="link">
          <li className="sidebarListItem active">
          {/* //  onClick={handleMessageHomeClick}> */}
            <LineStyle className="sidebarIcon" />
            Home
          </li>
          </Link>
          <Link to="/products" className="link">
          <li className="sidebarListItem">

          {/* //  onClick={handleMessageAnalyticsClick}> */}
          
            <Timeline className="sidebarIcon" />
            Products
          </li>
        </Link>


        <Link to="/sales" className="link">
          <li className="sidebarListItem"
          //  onClick={handleMessageSalesClick}
          >
            <TrendingUp className="sidebarIcon" />
            Sales
          </li>
          </Link>



        </ul>
      </div>
      <div className="sidebarMenu">
        <h3 className="sidebarTitle">Quick Menu</h3>
        <ul className="sidebarList">
          <Link to="/users" className="link">
            <li className="sidebarListItem">
              <PermIdentity className="sidebarIcon" />
              Users
            </li>
          </Link>
          <Link to="/products" className="link">
            <li className="sidebarListItem">
              <Storefront className="sidebarIcon" />
              Products
            </li>
          </Link>
          <Link to="/transactions" className="link">
          <li className="sidebarListItem">
            <AttachMoney className="sidebarIcon" />
            Transactions
          </li>
          </Link>

          <Link to="/reports" className="link">
          <li className="sidebarListItem">
            <BarChart className="sidebarIcon" />
            Reports
          </li>
          </Link>
        </ul>
      </div>
      <div className="sidebarMenu">
        <h3 className="sidebarTitle">Notifications</h3>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <MailOutline className="sidebarIcon" />
            Mail
          </li>
          <li className="sidebarListItem">
            <DynamicFeed className="sidebarIcon" />
            Feedback
          </li>
          <li className="sidebarListItem">
            <ChatBubbleOutline className="sidebarIcon" />
            Messages
          </li>
        </ul>
      </div>
      <div className="sidebarMenu">
        <h3 className="sidebarTitle">Staff</h3>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon" />
            Manage
          </li>
          <li className="sidebarListItem">
            <Timeline className="sidebarIcon" />
            Analytics
          </li>
        </ul>
      </div>
    </div>
  </div>
  
 </div>









    </div>
    <div className="right-column">
tble
    <table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Id</th>
      <th>Delete user</th>
    </tr>
  </thead>
  <tbody>


    {userData.filter((user, index, self) => self.findIndex(u => u.email === user.email) === index)
    .map(user => (
      <tr key={user._id}>
        <td>{user.name}</td>
        <td>{user.email}</td>

        <td>
          <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
        </td>
      </tr>
    ))}



  </tbody>
</table>





    
    </div>
  </div>

  )
}

export default User