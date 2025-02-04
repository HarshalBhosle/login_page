import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Signup';
import Signin from './Signin';
import photo1 from './assets/photo1.jpg'; // Replace with your image file path

function App() {
  return (
    <Router>
      <div className="container-fluid vh-100 d-flex align-items-center justify-content-center text-light" style={{ backgroundColor: '#000' }}>
        <div className="row w-100">
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <img src={photo1} alt="Signup Illustration" className="img-fluid" />
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <Routes>
              <Route path="/signup" element={<Signup />} />
              <Route path="/signin" element={<Signin />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
