import { useState } from 'react';
import store from './store/store'

const { ApolloClient, InMemoryCache, gql, useQuery } = require("@apollo/client");

const client = new ApolloClient({
    uri: 'http://localhost:4000',
    cache: new InMemoryCache()
});

export function Weather() {
  
const [city, setCity] = useState("Toronto");
store.subscribe(() => {
  const userCity = store.getState().state.city
  if (userCity !== null && city == null) {
    setCity(userCity)
  }
})

const GET_WEATHER = gql 

`
query{
    getCityByName(name: "${city}"){
      weather{
        summary{
          title
          icon
          description
        }
        wind{
            speed
            deg
        }
        temperature{
          actual 
          feelsLike
          min
          max
        }
        clouds{
          all
          visibility
          humidity
        }
        timestamp
      }
    }
  }
`;

    
    const {Loading, error, data} = useQuery(GET_WEATHER);

    if(Loading) return (<h2>Loading. . . </h2>);
    if(error) return (<h3>Error ! {error.message}</h3>);
    if(data !== undefined ) {
        const { getCityByName: 
            { weather: 
                { 
                    summary: { icon, description }, 
                    wind: { speed, deg },
                    temperature: { actual, feelsLike, min, max }, 
                    clouds: { all, visibility, humidity }, timestamp, 
                },    
        }} = data;
        
        return (
            <div>
                <div>
                    <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon"/>
                </div>
                <div>
                        <h2>Description: {description}</h2>
                        <h3>Actual Temparature:{actual}K</h3>
                        <h3> Feels Like: {feelsLike}K</h3>
                        <h3> Min Temparature: {min}K</h3>
                        <h3> Max Temparature : {max}K</h3>
                        <h3>Wind Speed: {speed}m/s</h3>
                        <h3>Wind Direction: {deg}°</h3>
                        <div>
                            <h3>Cloudiness: {all}%</h3>
                            <h3>Visibility: {visibility/1000}km</h3>
                            <h3>Humidity: {humidity}%</h3>
                        </div>
                        <div>
                            <p>TimeStamp:{timestamp}
                            </p>
                        </div>
                </div>
            </div>
        );
    }
    
    return (
    <div>
       <h2>{Loading}</h2>
    </div>
    );
    
   
}

export default client;