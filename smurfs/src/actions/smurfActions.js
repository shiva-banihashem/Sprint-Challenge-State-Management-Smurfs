import axios from "axios";

// Actions
export const FETCH_SMURF = 'FETCH_SMURF';
export const SMURF_SUCCESS = 'SMURF_SUCCESS';
export const SMURF_ERROR = 'SMURF_ERROR';
export const SMURF_ADD = 'SMURF_ADD';
export const SMURF_UPDATE = 'SMURF_UPDATE';
export const SMURF_DELETE = 'SMURF_DELETE';

// export const fetchSmurf = () => dispatch => {
   export const fetchSmurf =() => dispatch => {
    
     console.log("Starting to load");
    
     dispatch({type:FETCH_SMURF})
     
    // axios.get('/smurfs')
     axios.get('http://localhost:3333/smurfs')
          .then(res => {
              console.log(res);
              dispatch({type:SMURF_SUCCESS,payload:res.data})  

            })
          .catch(err => {
              console.log("error Fetching",err)
              dispatch({ type: SMURF_ERROR, payload: err.message })
          })
    
 }

 export function addSmurf(newSmurf) {
  return (dispatch) => 
  {
       dispatch({ type: SMURF_ADD});
      axios.post('http://localhost:3333/smurfs', newSmurf)
      .then(res => {
          console.log("Adding Data")
          console.log(res.data)
          dispatch({ type: SMURF_SUCCESS, payload: res.data })
      })
      .catch(err => {
          dispatch({ type: SMURF_ERROR, payload: err.message })
      })
  }
}

export function updateSmurf(updatedSmurf) {
  return (dispatch) => {
      
        dispatch({ type: SMURF_UPDATE })
      axios.put(`http://localhost:3333/smurfs/${updatedSmurf.id}`, updatedSmurf)
      .then(res => {
          console.log("updating Data");
          console.log(res.data);
          dispatch({ type: SMURF_SUCCESS, payload: res.data })
          
      })
      .catch(err => {
          
          dispatch({ type: SMURF_ERROR, payload: err.message })
      })
  }
}

export function deleteSmurf(id) {
  
  return (dispatch) => {
      
      dispatch({ type: SMURF_DELETE })

      axios.delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => {
          console.log("deleting data");
          console.log(res.data);
          dispatch({ type: SMURF_SUCCESS, payload: res.data })
          
      })
      .catch(err => {
          
          dispatch({ type: SMURF_ERROR, payload: err.message })
      })
  }
}