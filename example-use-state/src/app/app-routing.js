
import React from 'react';
import { Routes, Route } from "react-router-dom";

import Home from './pages/home';

const About = React.lazy(() => import('./pages/about'));
const Example = React.lazy(() => import('./pages/example'));

class AppRouting extends React.Component {

  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />

        <Route path="about/*" element={<React.Suspense fallback={<>...</>}><About /></React.Suspense>} />
        <Route path="example/*" element={<React.Suspense fallback={<>...</>}><Example name="toto" /></React.Suspense>} />

      </Routes>
    )
  }

}

export default AppRouting;