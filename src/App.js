import React, { useState } from 'react'
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enable or not.
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert(
      {
        msg: message,
        type: type
      }
    )
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode hase been enable!", "success");
      document.title = 'TextUtils - Dark Mode';

      // setInterval(()=>{
      //   document.title = 'TextUtils is amazing mode';
      // }, 2000)

      // setInterval(()=>{
      //   document.title = 'Install TextUtils Now';
      // }, 1500)
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode hase been enable!", "success");
      document.title = 'TextUtils - Light Mode';
    }
  }

  return (
    // This is an jsx fragement
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils"/>  */}
      {/* <Navbar /> */}

      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
            <Route path="*" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;