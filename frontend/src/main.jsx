// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
// import Layout from './Layout.jsx'
// import Home from './components/Home/Home.jsx'
// import About from './components/About/About.jsx'
// import Tests from './components/Tests/Tests.jsx'
// import Login from './components/login/Login.jsx'




// const router =createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout/>}>
//       <Route path='' element={<Home/>}/>
//       <Route path='about' element={<About/>}/>
//       <Route path='tests' element={<Tests/>}/>
//       <Route path='login' element={<Login/>}/>
//     </Route>
    
//   )
// )



// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//   <RouterProvider router={router}/>
//   </StrictMode>,
// )
// 
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './Layout.jsx' // Adjusted to match folder-inside-file format
import Home from './components/Home/Home';
import About from './components/About/About';
import Tests from './components/Tests/Tests';
import Login from './components/login/Login';
import RandomQuestions from './components/Questions/RandomQuestions.jsx';
import AgeQuestions from './components/Questions/AgeQuestions.jsx';
import MathQuestions from './components/Questions/MathQuestions.jsx';
import LogicQuestions from './components/Questions/LogicQuestions.jsx';
import NotFound from './components/NotFound/NotFound.jsx'; // Updated import
import { AuthProvider } from './Context/AuthContext.jsx';
import Register from './components/Register/Register.jsx';
import AdminAuth from './Admin/AdminAuth.jsx';
import AdminHeader from './Admin/AdminHeader.jsx';
import AddQuestion from './Admin/add questions/AddQuestions.jsx';
import QuestionList from './Admin/question List/QuestionList.jsx';
import TopicsHome from './components/Topics/TopicsHome.jsx';
import UserQuestions from './components/Topics/UserQuestions.jsx';
// Create a router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} errorElement={<NotFound />}>
      <Route index element={<Home />} /> {/* Default route */}
      <Route path='about' element={<About />} /> {/* About route */}
      <Route path='tests' element={<Tests />} /> {/* Tests route */}
      <Route path='login' element={<Login />} /> {/* Login route */}
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />
      <Route path='adminauth'  element={<AdminAuth />}/>
      <Route path='admin' element={<AdminHeader/>}/>
      <Route path='addQuestion' element={<AddQuestion/>}/>
      <Route path='questionlist' element={<QuestionList/>}/>
      <Route path='topicshome' element={<TopicsHome/>}/>
      <Route path='/question/:topic' element={<UserQuestions/>}/>
      {/* Question routes */}
      <Route path='random' element={<RandomQuestions />} />
      <Route path='age' element={<AgeQuestions />} />
      <Route path='math' element={<MathQuestions />} />
      <Route path='logic' element={<LogicQuestions />} />
    </Route>
  )
);

// Render the application
createRoot(document.getElementById('root')).render(
  
  <AuthProvider>
     <RouterProvider router={router} /> {/* Provide the router to the app */}
  </AuthProvider>

);
// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Layout from './Layout.jsx' // Make sure path is correct
// import Home from './components/Home/Home';
// import About from './components/About/About';
// import Tests from './components/Tests/Tests';
// import Login from './components/Login/Login';
// import RandomQuestions from './components/Questions/RandomQuestions';
// import AgeQuestions from './components/Questions/AgeQuestions';
// import MathQuestions from './components/Questions/MathQuestions';
// import LogicQuestions from './components/Questions/LogicQuestions';
// import NotFound from './components/NotFound/NotFound'; // Ensure the path to NotFound is correct
// import { Auth0Provider } from '@auth0/auth0-react';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     errorElement: <NotFound />,
//     children: [
//       { path: '/', element: <Home /> }, // Default route
//       { path: 'about', element: <About /> },
//       { path: 'tests', element: <Tests /> },
//       { path: 'login', element: <Login /> },
//       { path: 'random', element: <RandomQuestions /> },
//       { path: 'age', element: <AgeQuestions /> },
//       { path: 'math', element: <MathQuestions /> },
//       { path: 'logic', element: <LogicQuestions /> },
//     ],
//   },
// ]);

// createRoot(document.getElementById('root')).render(
//   <Auth0Provider
//     domain="dev-d5h0aw4gnihbdevo.us.auth0.com"
//     clientId="qCz1SyBic5xEKONoK0hnum1UAW1rjvl0"
//     authorizationParams={{ redirect_uri: window.location.origin }}
//   >
//     <RouterProvider router={router} />
//   </Auth0Provider>
// );
