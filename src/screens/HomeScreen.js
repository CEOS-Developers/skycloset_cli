import React, {Component} from 'react';
import {StyleSheet, ScrollView, Text, View} from 'react-native';
import {connect} from 'react-redux';

import Drawer from 'react-native-drawer'
import LinearGradient from 'react-native-linear-gradient'

import DrawerPanel from '../components/DrawerPanel'
import HomeHead from '../components/HomeHead'
import WeatherInfo from '../components/WeatherInfo'
import Closet from '../components/Closet'

class HomeScreen extends Component {
    state = {
        address : '',
        tempNow : 0,
        tempMin : 0,
        tempMax : 0,
        humidity : 0,
        windSpeed : 0,
        weatherId : 0,
        weatherCondition : 0,
    }

    componentDidMount() {
        this.setState({
            address: this.props.address[2].long_name + ' ' + this.props.address[1].long_name,
            tempNow: (this.props.weather.main.temp / 10).toFixed(1),
            tempMin: (this.props.weather.main.temp_min / 10).toFixed(1),
            tempMax: (this.props.weather.main.temp_max / 10).toFixed(1),
            humidity : this.props.weather.main.humidity,
            windSpeed : this.props.weather.wind.speed,
            weatherId : this.props.weather.weather[0].id,
            weatherCondition : this.props.weather.weather[0].icon.substring(0, 2),
        });
    }

    openDrawer = () => {
        this._drawer.open()
    };

    render() {
        const {address, tempNow, tempMax, tempMin, weatherId, weatherCondition} = this.state;
        return (
                <Drawer
                    ref={(ref)=>this._drawer = ref}
                    content={<DrawerPanel />}
                    openDrawerOffset={0.4}
                    tapToClose={true}
                    >
                    <ScrollView style={styles.container}>
                        <LinearGradient colors={['#00397B', '#CF8827']} style={styles.linearGradient}>
                            <View style={styles.wrapper}>
                                <HomeHead
                                    style={styles.homeHead}
                                    address={address}
                                    onButtonPressed={this.openDrawer}
                                />
                                <WeatherInfo 
                                    tempNow={tempNow} 
                                    tempMin={tempMin} 
                                    tempMax={tempMax}
                                    weaterId={weatherId}
                                    weatherCondition={weatherCondition}
                                />
                                <Closet
                                    style={{width:"100%"}}
                                />
                                <Text>fdsdsf</Text>
                                <Text>fdsdsf</Text>
                                <Text>fdsdsf</Text>
                                <Text>fdsdsf</Text>
                            </View>
                        </LinearGradient>
                    </ScrollView>
                </Drawer>
        );
    }
}

const styles = StyleSheet.create({
    wrapper : {
        paddingTop : "8%",
        paddingLeft : "5%",
        paddingRight : "5%",
    },
    container : {
        height:"150%",
    },
    homeHead : {
        height: "15%",
    },
    weatherInfo : {
        height: "70%",
    },
});

const mapStateToProps = state => {
    return {
        location: state.geoloc.location,
        address: state.geoloc.address,
        weather: state.weather.weather,
        forecast : state.weather.forecast,
        pastWeather : state.weather.pastWeather,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);