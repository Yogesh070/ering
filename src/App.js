import React from 'react';
import './App.css';
import Home from './pages'
import Terminology from './pages/Terminology.js'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

// import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
// import { css } from "@emotion/react";

// const override = css`
//   display: flex;
//   direction: column;
//   justify-content: center;
//   margin: auto;
//   align-items: center;
//   width: 100%;
//   height: 100vh;
//   border-color: orange;
//   background-color: black;
// `;

function App() {

  // const [loading,setLoading] = useState(false);

  // useEffect(()=>{
  //   setLoading(true)
  //   setTimeout(()=>{
  //     setLoading(false)
  //   },2000)
  // },[]);

  return (
    <>
    {
      // loading ?  <ClimbingBoxLoader css={override}  color={'#F37A24'} loading={loading} size={20} /> :
      <Router>
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/terminology' component={Terminology} exact/>
        </Switch>
      </Router>
    }
    </>
  );
}

export default App;
