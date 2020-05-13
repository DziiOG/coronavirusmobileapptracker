import React, { Component,useState, useEffect } from 'react'
import { View, Text, Container, Content } from 'native-base'
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import styles from './MapStyles';
import { fetchCountries } from '../api';
import { color } from 'react-native-reanimated';
import { ActivityIndicator } from 'react-native';
import { ProductConsumer } from '../context';
import Geocoder from 'react-native-geocoding';


Geocoder.init("AIzaSyAjL_doMA-BBX1S-Lx_BJXrPAjQCFh3UrM");

const CountryPicker = ({countries, locations, navigation}) => {
    

       
        return (



            (locations.length !== 0)?


            <Container style={styles.container}>

            <ProductConsumer>
                {
                    (value) => (

                        <MapView
                        style={styles.map}
                        
                        provider={PROVIDER_GOOGLE}
                        initialRegion={{
                            latitude: 6.667,
                            longitude: -1.433,
                            latitudeDelta: 50.63423135098903,
                            longitudeDelta: 30.96306831389666
                        }}
                        
                        >
                            {
                                locations.map((location, i)=> (
                                    <Marker key={i}
                                    coordinate={{
                                        latitude: location[0].lat,
                                        longitude: location[0].lng,
                                        latitudeDelta: 0.1403,
                                        longitudeDelta: 0.1903
                                        
                                    }}
                                    color='#5cccee'
                                    onPress={()=>{ 

                                                    value.handleCountryChange(location[1])
                                                    navigation.navigate('Home')
                                                  
                                    }}
                                    >

                                    </Marker>
                                ))
                            }
                        </MapView>
                    )
                }
            </ProductConsumer>
            

            </Container> :
            (<Container style ={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <ActivityIndicator >

                </ActivityIndicator>
            </Container>)
        )
    
}

export default CountryPicker;