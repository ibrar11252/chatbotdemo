import React,{useState,useEffect} from 'react'

import "./Home.css";

import "../../sidebar/sidebar.css"
import { Link } from "react-router-dom";
import FeaturedInfo from '../../featuredInfo/FeaturedInfo';
import Chart from '../../chart/Chart';
import { userData } from '../../../dummyData'
import WidgetSm from '../../widgetSm/WidgetSm';
import WidgetLg from '../../widgetLg/WidgetLg';

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

export default function Home() {
  
 


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
           
          </ul>
        </div>







      </div>
    </div>
    
   </div>









      </div>
      <div className="right-column">

           home
           <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
      <div className="homeWidgets">
         <WidgetSm/>
        <WidgetLg/> 




      
      </div>
    </div>
 
</div>
  );
}