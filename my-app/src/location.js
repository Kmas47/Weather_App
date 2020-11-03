import { connect } from 'react-redux';
import store from './store/store';
const { Component } = require("react"); 

class UserLocation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            city: ""
        }
    }

componentDidMount() {
   const url = `http://api.ipstack.com/check?access_key=${process.env.REACT_APP_KEY}&fields=city`;
   const city = fetch(url).then(Response => Response.json());
   city.then(prop => {
       this.setState({ city: prop.city })  
       const a = store.dispatch({type: 'INITIAL', payload: this.state.city}) 
       console.log(a)
       

   }) 
}

render() {
    
    return(
        
        <div>
            <h1>Location:{this.state.city}</h1>
        </div>
    );
}

}

export default  connect (state => state)(UserLocation);

