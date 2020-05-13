import React, { Component } from 'react'
import CountryPicker from './CountryPicker'
import Geocoder from 'react-native-geocoding';
import { fetchCountries, fetchData } from '../api';
 

Geocoder.init("AIzaSyAjL_doMA-BBX1S-Lx_BJXrPAjQCFh3UrM");



export default class picker extends Component {


state={
    Countries: [],
    locations: [],
    country: '',
    data: {}
}

componentDidMount(){
    this.fetchAPI()
    
}

fetchAPI = async () => {
    let country = await fetchCountries();


    this.setState({
        Countries: country,
        
    })

   

    //console.log(this.getCordinates())
    this.getCordinates()
}




getCordinates = () => {

    let array = [];
    let lastItem = this.state.Countries.length
    //let stubborn = this.state.Countries[105]



   this.state.Countries.map((country, i)=> {

       Geocoder.from(country)
           .then(json => {
               var location = json.results[0].geometry.location;
              array.push([location, country])
             //console.log(lastItem)
             //console.log(i)
            if(i === (lastItem - 1)){
                this.setState({
                    locations: [...this.state.locations, ...array]
                })
                console.log(this.state.locations)
                
            }
             
           })
           .catch(error => console.warn(error));



          
   }
   
   )
   

   
}





    render() {
        return (
            <CountryPicker countries={this.state.Countries} locations={this.state.locations} {...this.props}></CountryPicker>
        )
    }
}
