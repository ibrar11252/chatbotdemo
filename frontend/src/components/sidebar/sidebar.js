import React,{useState,useEffect} from 'react'

import "./sidebar.css";
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
import { Link } from "react-router-dom";
import Home from '../pages/home/Home';
import Product from '../pages/product/Product';
import Sale from '../pages/sales/Sale';

export default function Sidebar() {
   const [showHome,setShowHome]=useState(false)
    const [message, setMessage] = useState(null); // state to store the message
    const [showSales,setShowSales]=useState(false)
   const [showAnalytics,setShowAnalytics]=useState(false)



    const handleMessageHomeClick = () => {
      setShowAnalytics(false)
      setShowSales(false)
     setShowHome(true);




     console.log(showHome)
     if(showHome){
       <Home />
     }
   

    
    };


   const handleMessageAnalyticsClick=()=>{
    setShowHome(false)
    setShowSales(false)
    setShowAnalytics(true)
    
  
   }


    const handleMessageSalesClick=()=>{
      setShowHome(false)
      setShowAnalytics(false)
      setShowSales(true)


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
             onClick={handleMessageSalesClick}
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
          <Link to="/customorder" className="link">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              Print on order
            </li>
            </Link>

            <Link to="/staticorders" className="link">

            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Static orders
            </li>
            </Link>
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

{/* 
      {showHome && <Home />}

  {showAnalytics && <Product />}

  {showSales && <Sale />} */}
      
      </div>
    </div>
 



  );
}