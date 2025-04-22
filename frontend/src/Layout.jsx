// import React from 'react'
// import Header from './components/Header/Header'
// import { Outlet } from 'react-router-dom'
// import Footer from './components/Footer/Footer'

// const Layout = () => {
//   return (
//     <>
//     <Header/>
//     <Outlet/>
//     <Footer/>
//     </>
//   )
// }

// export default Layout
import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();

  // Condition to hide the header and footer on the login page
  const hideHeaderAndFooter = location.pathname === '/login' || location.pathname ==='/admin' || 
  location.pathname === '/adminauth'  ||  location.pathname === '/addQuestion' || location.pathname === '/questionlist';

  return (
    
    <>
      {!hideHeaderAndFooter && <Header />}
      <Outlet />
      {!hideHeaderAndFooter && <Footer />}
    </>
  );
};

export default Layout;