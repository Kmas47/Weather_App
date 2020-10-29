const { Component } = require("react");

class UserLocation extends Component {
state = {
    city: ""
}

cityLocation(props) {
   let url = `http://api.ipstack.com/check?access_key=${process.env.REACT_APP_KEY}&fields=city`;
   let city = fetch(url).then(Response => Response.json());
   let data = city.then(prop => {
       this.setState({ city: prop.city })   
       return this.state
   }) 
}


componentDidMount(){
this.cityLocation();


}
render() {
    
    return(
        <div>
            <h1>Location:{this.state.city}</h1>
        </div>
    );
}

}

export default UserLocation;