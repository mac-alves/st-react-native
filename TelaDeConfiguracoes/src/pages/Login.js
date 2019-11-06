import React, { Component } from 'react';
import { View, Button, Text, StyleSheet } from "react-native";

export default class Login extends Component {
  
    static navigationOptions = {
        header:null
    } 

    render() {
        return(
            <View style={styles.container} >
                <Button title="Login" onPress={()=>this.props.navigation.navigate('Home')} />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center'
    }
});