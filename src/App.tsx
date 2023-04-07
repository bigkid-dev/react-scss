import React from 'react';
import logo from './logo.svg';
import './App.css';
import { LoginPage } from './pages/login';
import { DashboardPage } from './pages/dashboard';
import { UsersDetailsPage } from './pages/users.details';

// function App() {
//   return(
//     <LoginPage/>
//   )
// }


function App() {
  return <UsersDetailsPage />;
}

export default App;
