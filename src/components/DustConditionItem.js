import React, {Component} from 'react'
import {Image, View, Text, StyleSheet} from 'react-native'

export default class DustConditionItem extends Component {
    render() {
        const {name, condition} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.name}>
                    {name}
                </Text>
                <Image
                    style={styles.icon}
                    source={require('../assets/images/dustIcon/3.png')}
                />
                <Text style={styles.condition}>
                    {condition}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft:"2%",
        flex:1,
    },
    icon : {
        height : 25,
        width : 25,
    },
    name : {
        width : "28%",
        fontFamily: 'Bongodik',
        fontSize: 13,
        color : 'white',
        marginRight: "10%",
    },
    condition : {
        fontFamily: 'Bongodik',
        fontSize: 13,
        color : 'white',
        marginLeft : "12%",
    }
});