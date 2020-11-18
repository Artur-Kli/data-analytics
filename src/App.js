import { Router } from '@reach/router'
import axios from 'axios'
import logo from './logo.png';
import ResponsiveNavigation from './components/ResponsiveNavigation'
import Home from './pages/Home'
import DashboardSelector from './pages/DashboardSelector'
import Dashboard from './pages/Dashboard'
import './App.css';
import './scss/base.scss'


require('./mock-endpoints/mocks')
// if (process.env.NODE_ENV === 'development') {
//   require('./mock-endpoints/mocks')
// }

function App() {
  const navLinks = [
    {
      text: 'Home',
      path: '/',
      icon: 'ion-ios-home'
    },
    {
      text: 'Analytics',
      path: '/analytics',
      icon: 'ion-ios-images'
    }
  ]

  return (
    <div className="App">
      <ResponsiveNavigation 
        navLinks={navLinks}
        logo={logo}
        background="#fff"
        hoverBackground="#ddd"
        linkColor="#777"
      />
      <Router>
        <Home path="/" />
        <DashboardSelector path="/analytics" axios={axios} />
        <Dashboard path="/analytics/:dashboardName" axios={axios} />
      </Router>
    </div>
  );
}

export default App;
