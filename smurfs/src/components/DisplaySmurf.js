import React from 'react';
import { connect } from 'react-redux';
const DisplaySmurf = props => {
 
  
     return (

   
    <div>

      {props.smurf.map(item => {
            return <div className="display" key={item.id}>

              <h2><b>Smurf Name:</b> {item.name}</h2>
              <p><b>Smurf Age:</b> {item.age}</p>
              <p><b>Smurf height:</b>{item.height}</p>
              <div className="update">
              <button onClick={() => props.editMember(item.id)}>Update</button>
              <button onClick={() => props.delMember(item.id)}>Delete</button>
              </div>
            </div>  
          })}  
    </div>
     
  );
  
};


function mapStateToProps(state) {
    return {
      smurf: state.smurf,
      isLoading: state.isLoading, 
      error: state.error
    }
  }

export default connect(mapStateToProps )(DisplaySmurf);

