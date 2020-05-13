import React, { Component } from 'react'

import { Dimensions, ActivityIndicator, TouchableOpacity } from 'react-native'
import { View, Text, Card, CardItem, Container, Content, Button } from 'native-base'
import AnimateNumber from 'react-native-countup'
import { ProductConsumer } from '../context';
import { ImageBackground } from 'react-native';


const {width, height} = Dimensions.get("window");

export default class Home extends Component {
    render() {
        return (
            <ProductConsumer>
                {
                    (value) => (
                        
                                    (value.data.confirmed)?(

                                    <Container style={{flex: 1, alignItems: 'center', backgroundColor: '#fff'}}>

                                            <Content>
                                            <View style={{flex: 1}}>
                                                <ImageBackground source={require('../assets/sars-cov-19.png')} style={{width: width, height: height, flex: 1, alignItems: 'center'}}>
                                                        <Card style={{width: width * 0.90, marginTop: 10, borderWidth: 3, borderColor: '#5cccee'}}>
                                                                <CardItem>
                                                                    <View style={{flexDirection: 'column',flex: 1, alignItems: 'center'}}>
                                                                        <View  style={{marginTop: 5}}>
                                                                            <Text note style={{fontSize: 24}}>Infected</Text>
                                                                        </View>
                                                                        <View  style={{marginTop: 5}} >
                                                                            <AnimateNumber style={{fontSize: 30, color: '#5cccee'}} value={value.data.confirmed.value} formatter={(val) => {
                                                                                        return  parseFloat(val).toFixed(0)
                                                                                    }}></AnimateNumber>
                                                                        </View>
                                                                        <View  style={{marginTop: 5}}>
                                                                            <Text note>{new Date(value.data.lastUpdate).toDateString()}</Text>
                                                                        </View>
                                                                        <View style={{marginTop: 5}}>
                                                                            <Text note>Number of active cases of Covid-19</Text>
                                                                        </View>
                                                                    </View> 
                                                                </CardItem>
                                                                <CardItem style={{backgroundColor: '#5cccee'}}>

                                                                </CardItem>
                                                        </Card>
                                                        <Card style={{width: width * 0.90, marginTop: 10, borderWidth: 3, borderColor: '#00ff00'}}>
                                                                <CardItem>
                                                                    <View style={{flexDirection: 'column',flex: 1, alignItems: 'center'}}>
                                                                        <View  style={{marginTop: 5}}>
                                                                            <Text note style={{fontSize: 24}}>Recoveries</Text>
                                                                        </View>
                                                                        <View  style={{marginTop: 5}} >
                                                                            <AnimateNumber style={{fontSize: 30, color: '#00ff00'}} value={value.data.recovered.value} formatter={(val) => {
                                                                                        return  parseFloat(val).toFixed(0)
                                                                                    }}></AnimateNumber>
                                                                        </View>
                                                                        <View  style={{marginTop: 5}}>
                                                                            <Text note >{new Date(value.data.lastUpdate).toDateString()}</Text>
                                                                        </View>
                                                                        <View style={{marginTop: 5}}>
                                                                            <Text note >Number of recoveries cases of Covid-19</Text>
                                                                        </View>
                                                                    </View> 
                                                                </CardItem>
                                                                <CardItem style={{backgroundColor: '#00ff00'}}>

                                                                </CardItem>
                                                        </Card>
                                                        <Card style={{width: width * 0.90, marginTop: 10, borderWidth: 3, borderColor: '#ff0000'}}>
                                                                <CardItem>
                                                                    <View style={{flexDirection: 'column',flex: 1, alignItems: 'center'}}>
                                                                        <View  style={{marginTop: 5}}>
                                                                            <Text note style={{fontSize: 24}}>Deaths</Text>
                                                                        </View>
                                                                        <View  style={{marginTop: 5}} >
                                                                            <AnimateNumber style={{fontSize: 30, color: '#ff0000'}} value={value.data.deaths.value} formatter={(val) => {
                                                                                        return  parseFloat(val).toFixed(0)
                                                                                    }}></AnimateNumber>
                                                                        </View>
                                                                        <View  style={{marginTop: 5}}>
                                                                            <Text note>{new Date(value.data.lastUpdate).toDateString()}</Text>
                                                                        </View>
                                                                        <View style={{marginTop: 5}}>
                                                                            <Text note>Number of deaths cases of Covid-19</Text>
                                                                        </View>
                                                                    </View> 
                                                                </CardItem>
                                                                <CardItem style={{backgroundColor: '#ff0000'}}>

                                                                </CardItem>
                                                        </Card>
                                                    <TouchableOpacity 
                                                    style={{backgroundColor: 'white', width: 80, marginTop: 10, alignItems: 'center'}}
                                                    onPress={()=> {value.handleCountryChange('')}}
                                                    >
                                                        <Text style={{color: '#000000'}}>Global</Text>                                       
                                                    </TouchableOpacity>
                                                </ImageBackground>
                                            </View>
                                           
                                            
                                            
                                            </Content>
                                    </Container>
                                    ) : (
                                        <Container style={{alignContent: 'center', justifyContent: 'center', flex: 1}}>
                                            <ActivityIndicator></ActivityIndicator>
                                        </Container>
                                    )
                    )
                }
            </ProductConsumer>
            
        )
    }
}
