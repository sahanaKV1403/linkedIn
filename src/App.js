import React from 'react';
import Home from "./Pages/home/Home";
import Header from './Components/header/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <Home />

      {/* <Routes>
        <Route path='/' element={<Home />} />
      </Routes> */}
    </div>
  );
}

export default App;