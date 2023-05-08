import React,{useState,useEffect} from 'react'
import "../../sidebar/sidebar.css"
import { Link } from "react-router-dom";

import "./printonorder.css"


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



const PrintOnOrder = () => {
    const [userData, setUserData] = useState([]);
let count=0;
    useEffect(() => {
      findUsers();
    }, []);
  
    const findUsers= async ()=>{
      count++;
      console.log('My function find users of print on order was called!' + count);
  
     
  const response=await fetch('http://localhost:5000/api/customorder', {
    method: 'GET',
    headers: {
  
      'Content-Type': 'application/json',
    },
  
    
    })
    const userDataArray = [];
   
  
    if(response.status==200){
  
    const dataHere=await response.json();
  
  
  
  console.log("datahere from printonorder is "+ dataHere[0])
    dataHere.forEach((user) => {
        console.log(user)
    //   console.log(`id: ${user._id}, email: ${user.email}, name: ${user.name}`);
    
    
    const userObj = {
        firstName: user.firstName,
        contactOrEmail: user.contactOrEmail,
        phoneNum: user.phoneNum,
        address: user.address,
        city: user.city,
        colorShoe: user.colorShoe,
        categoryOfShoe: user.categoryOfShoe,
        bottomSoleShoe: user.bottomSoleShoe,
        upperShoe: user.upperShoe,
        createdAt:user.createdAt,

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
  
  






  //displaying date in user friendly way

  const formatOrderDate = (date) => {
    // Convert the date string into a date object
    const orderDate = new Date(date);
  
    // Format the date object into a formatted string
    const options = {
      month: '2-digit',
      day: '2-digit',
      year: '2-digit'
    };
  
  
    return orderDate.toLocaleDateString('en-US', options);
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
      <th>First Name</th>
      <th>Email</th>
      <th>Phone Number</th>
      <th>Address</th>
      <th>City</th>
      <th>Color </th>
      <th>Category </th>
      <th> Sole</th>
      <th>Upper</th>
      <th>Order Date</th>
      <th>Delete user</th>
    </tr>
  </thead>
  <tbody>

    {userData.filter((user, index, self) => self.findIndex(u => u.contactOrEmail === user.contactOrEmail) === index)
    
    .map(user => (
      <tr key={user._id}>
        <td>{user.firstName}</td>
        <td>{user.contactOrEmail}</td>
        <td>{user.phoneNum}</td>
        <td>{user.address}</td>
        <td>{user.city}</td>
        <td>{user.colorShoe}</td>
        <td>{user.categoryOfShoe}</td>
        <td>{user.bottomSoleShoe}</td>
        <td>{user.upperShoe}</td>
        <td>{formatOrderDate(user.createdAt)}</td>

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

export default PrintOnOrder