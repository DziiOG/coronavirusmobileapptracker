import React, { Component } from 'react'


const ProductContext = React.createContext();
import { fetchData } from './api'

 class ProductProvider extends Component {

    state={
        data: {},
        country: '',
    }

  


    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
    
        console.log(fetchedData)
        
        this.setState({
          data: fetchedData,
          country: country
        })
    
      }
    
     async componentDidMount(){
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData})
       console.log(this.state.data)
      }


      handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country)
    
        console.log(fetchedData)
        
        this.setState({
          data: fetchedData,
          country: country
        })
    
    }
  


    render() {
        return (
           <ProductContext.Provider
           value={{...this.state,
           handleCountryChange: this.handleCountryChange
           }}
           >
               {this.props.children}
           </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;
export {ProductProvider, ProductConsumer}
