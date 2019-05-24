import React, {Component} from 'react'
import {Image, View, Text, StyleSheet} from 'react-native'

export default class WeatherCondition extends Component {
    getWeatherIcon = (weatherId, weatherCondition) => {
        switch(weatherCondition) {
            case '11' : return require('../assets/images/weatherIcon/lightning.png');
            case '09' :
            case '10' : return require('../assets/images/weatherIcon/rain.png');
            case '13' : {
                    if(weatherId == 615 || weatherId == 616)
                        return require('../assets/images/weatherIcon/snow_rain.png'); 
                    else
                        return require('../assets/images/weatherIcon/snow.png');
                }
            case '01' : return require('../assets/images/weatherIcon/sunny.png'); // 시간대별로 아이콘 다르게 설정해줘야함!! (moon, sunrise, sunset)
            case '02' :
            case '03' :
            case '50' :
            case '04' : return require('../assets/images/weatherIcon/cloudy.png');
            default : return null;
        }
    }

    render() {
        const {tempDiff, weatherId, weatherCondition} = this.props;
        const icon = this.getWeatherIcon(weatherId, weatherCondition);
        return (
            <View style={styles.container}>
                <Image
                    style={styles.icon}
                    source={icon}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.condition}>
                        구름많음
                    </Text>
                    <Text style={styles.diff}>
                        어제보다 {tempDiff}℃
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        paddingLeft : "5%",
        paddingRight : "7%",
        borderRightWidth : 1,
        borderRightColor : 'white',
        flexDirection:'row',
        alignItems : 'center',
    },
    textContainer : {
        flexDirection: 'column'
    },
    condition : {
        fontSize : 16,
        color : 'white',
        marginBottom : "10%",
    },
    diff : {
        fontSize : 12,
        color : 'white',
    },
    icon : {
        height: 70,
        width : 70,
        marginRight:"7%",
    }
});