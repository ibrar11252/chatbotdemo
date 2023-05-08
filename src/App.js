import logo from './logo.svg';
import './App.css';
import ChatbotApp from './chatbot/ChatBotApp';
import Navbar from './components/Navbar/Navbar';
// import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { Route, Routes, Switch, BrowserRouter as Router } from "react-router-dom";
import Sidebar from './components/sidebar/sidebar';
import Home from './components/pages/home/Home';
import Product from './components/pages/product/Product';
import Sale from './components/pages/sales/Sale';
import User from './components/pages/users/User'
import Transaction from './components/pages/transactions/Transaction'
import Report from './components/pages/report/Report'
import PrintOnOrder from './components/pages/customShoes/PrintOnOrder';
import StaticOrder from './components/pages/staticOrder/StaticOrder';




function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route exact path="/home" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/sales" element={<Sale />} />

          <Route path="/users" element={<User />} />
          <Route path="/transactions" element={<Transaction />} />
          <Route path="/reports" element={<Report />} />
       <Route path="/customorder" element={<PrintOnOrder />} />
       <Route path="/staticorders" element={<StaticOrder />} />
       <Route path="/chatbot" element={<ChatbotApp />} />


        </Routes>
      </div>
    </Router>
   




  );
}

export default App;
