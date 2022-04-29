
import React from 'react';
import { Routes, Route } from "react-router-dom";

import Home from './pages/general/home';
import Notfound from './pages/general/not-found';

const About = React.lazy(() => import('./pages/general/about'));
const Contact = React.lazy(() => import('./pages/general/contact'));
const Login = React.lazy(() => import('./pages/general/login'));
const Signup = React.lazy(() => import('./pages/general/signup'));

class AppRouting extends React.Component {

  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="about/*"
          element={
            <React.Suspense fallback={<>...</>}>
              <About />
            </React.Suspense>
          }
        />

        <Route
          path="contact/*"
          element={
            <React.Suspense fallback={<>...</>}>
              <Contact />
            </React.Suspense>
          }
        />

        <Route
          path="signup/*"
          element={
            <React.Suspense fallback={<>...</>}>
              <Signup />
            </React.Suspense>
          }
        />

        <Route
          path="login/*"
          element={
            <React.Suspense fallback={<>...</>}>
              <Login />
            </React.Suspense>
          }
        />


        <Route path="*" element={<Notfound />} />
      </Routes>
    )
  }

}

export default AppRouting;