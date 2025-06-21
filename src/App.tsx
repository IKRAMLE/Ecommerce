import HomePage from './Pages/HomePage';
import About from './Pages/About';
import Contact from './Pages/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import LoginModal from './Components/ui/LoginModal';
import RegisteringModal from './Components/ui/RegisteringModal';

function App() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage onLoginClick={() => setLoginOpen(true)} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <LoginModal
        open={loginOpen}
        onClose={() => setLoginOpen(false)}
        onSwitchToRegister={() => {
          setLoginOpen(false);
          setRegisterOpen(true);
        }}
      />
      <RegisteringModal
        open={registerOpen}
        onClose={() => setRegisterOpen(false)}
        onSwitchToLogin={() => {
          setRegisterOpen(false);
          setLoginOpen(true);
        }}
      />
    </BrowserRouter>
  );
}

export default App;
