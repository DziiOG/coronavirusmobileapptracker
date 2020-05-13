import React, { Component, Fragment } from 'react'
import { View, Text } from 'native-base'
import {Dimensions} from 'react-native'
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
import { ProductConsumer } from '../context';

export default class Charts extends Component {
    render() {


      
          const chartConfig = {
            backgroundGradientFrom: "#fff",
            backgroundGradientFromOpacity: 0,
            backgroundGradientTo: "#fff",
            backgroundGradientToOpacity: 0.5,
            color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
            strokeWidth: 3, // optional, default 3
            barPercentage: 1.5,
            useShadowColorFromDataset: false,
            fromZero: true
             // optional
          };


          
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Covid-19 Bar Chart</Text>
            <ProductConsumer>
                {
                    (value) => (
                            <Fragment>

                                <BarChart
                                    style={{
                                    marginVertical: 8,
                                    borderRadius: 16,
                                }}
                                    data={{
                                labels: ["Infected", "Recoveries", "Deaths"],
                                datasets: [
                                {
                                    data: [value.data.confirmed.value, value.data.recovered.value, value.data.deaths.value, ]
                                }
                                ]
                            }}
                                    width={Dimensions.get("window").width * 0.9}
                                    height={Dimensions.get("window").height * 0.7}
                                    yAxisLabel="P"
                                    chartConfig={chartConfig}
                                    verticalLabelRotation={0}
                                   
                                />
                            <Text>{value.country}</Text>
                            </Fragment>
                    )
                }
            </ProductConsumer>
          </View>
        )
    }
}
