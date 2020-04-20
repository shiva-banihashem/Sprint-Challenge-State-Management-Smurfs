import React, { useState,useEffect } from 'react'

import { connect } from 'react-redux';

import { addSmurf,updateSmurf,deleteSmurf } from '../actions/smurfActions';
import DisplaySmurf from "./DisplaySmurf";



function SmurfForm(props) {

    const [addNewSmurf, setAddNewSmurf] = useState({
        name: '',
        age: '',
        height: ''
    })
    const [memberToEdit, setMemberToEdit] =useState({});
    useEffect(() => {
    
        
        if (memberToEdit.name)
            
            setAddNewSmurf(memberToEdit);
        
        
        },[memberToEdit]);

        

    const editMember = (id )=> {
        
        const newArray = props.smurf.filter(member => {
          return member.id === id;
        });
        
        setMemberToEdit(newArray[0]);
    }
    
    const delMember = (id )=> {
        
        const newArray = props.smurf.filter(member => {
          return member.id === id;
        });
        
        props.deleteSmurf(newArray[0].id);
      };


    const handleSubmit = (e) => {
        
        e.preventDefault();
        
        if (memberToEdit.name) {
            props.updateSmurf(addNewSmurf)
            
            setMemberToEdit({name:"",age:"",height:""});
      
          }
        else {
            props.addSmurf(addNewSmurf)
          
        }
          // clears out the input values
        setAddNewSmurf({name:"",age:"",height:""});
    }

    const handleChange = (e) => {
        setAddNewSmurf({
            ...addNewSmurf,
            [e.target.name]: e.target.value
        })
    }
    
    return (
        <div>
          
        <form onSubmit={handleSubmit}>
            
            <input type="text" name="name" id="name"
             value={addNewSmurf.name} onChange={handleChange} placeholder="Smurf Name" />
            
            
            <input type="text" name="age" id="age" 
            value={addNewSmurf.age} onChange={handleChange} placeholder="Smurf Age" />
            
            <input type="text" name="height"  id ="height" 
            value={addNewSmurf.height} onChange={handleChange} placeholder=" Smurf Height" />
            
            
            <button type="submit">Add New Smurf</button>
        </form>
        <DisplaySmurf  delMember={delMember} editMember={editMember}/>
        
        </div>
    )
}

const mapDispatchToProps = {
    addSmurf,
    updateSmurf,
    deleteSmurf
  }
  
  function mapStateToProps(state) {
    return {
      smurf: state.smurf,
      isLoading: state.isLoading, 
      error: state.error
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(SmurfForm);