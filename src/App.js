import React from "react";
import Allrouter from "./Allrouter";
import axios from "axios";



function App() {
  axios.defaults.baseURL = 'https://dev.webmobrildemo.com/e_lorry/api';
  return (
    <>
    <Allrouter />
    </>
  );
}

export default App;
