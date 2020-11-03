import { useState } from 'react';
import { connect } from 'react-redux';
import store from './store/store'; 
  
function UserLocation() {
   const [state, setState] = useState({ city: "" });
   const url = `http://api.ipstack.com/check?access_key=${process.env.REACT_APP_KEY}&fields=city`;
   const location = fetch(url).then(Response => Response.json());
   location.then(prop => {
       console.log(prop)
       if (state.city !== "") {
        setState({ city: prop.city })
       } 
        if(state.city !== "") {
        store.dispatch({ type: 'INITIAL', payload: state.city }) 
       }  
   }) 
   return(
        
    <div>
        <h1>Location:{state.city}</h1>
    </div>
);
}

export default connect (state => state)(UserLocation);

