// import React, { Component } from "react";
import React, { useEffect } from "react";
import "./App.css";

// Redux
import { connect } from 'react-redux';

// Actions
import { fetchSmurf} from '../actions/smurfActions';

import SmurfForm from './SmurfForm';

import "./App.css";

function App(props) {
  
        useEffect(()=>{
          props.fetchSmurf();
          if(props.isLoading) {
            return <h2>Loading Data...</h2>
          }
        },[])


        return (


          <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>

        <SmurfForm />
        

       {props.error && <h4>{props.error}</h4>} 
      
        
      </div>
        )

}
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>SMURFS! 2.0 W/ Redux</h1>
//         <div>Welcome to your state management version of Smurfs!</div>
//         <div>Start inside of your `src/index.js` file!</div>
//         <div>Have fun!</div>
//       </div>
//     );
//   }
// }

const mapDispatchToProps = {
  fetchSmurf
}

function mapStateToProps(state) {
  return {
    smurf: state.smurf,
    isLoading: state.isLoading, 
    error: state.error
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
