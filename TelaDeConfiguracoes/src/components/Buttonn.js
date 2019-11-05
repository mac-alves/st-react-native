import React, { Component } from "react";
import { View, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class Buttonn extends Component {

    constructor(props){
        super(props);
        this.state = {};
        this.styles = StyleSheet.create({
            botao:{
                width:380,
                height:50,
                backgroundColor: 'transparent',
                borderRadius:10
            },
            botaoArea:{
                flex:1,
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'center'
            },
            text:{
                color: '#ffffff',
                fontSize:20
            }
        })
    }

    render () {
        return(
            <LinearGradient style={[this.styles.geral, this.styles.botao]} colors={['#2cb874', '#18a15e', '#0c8248']} >
                <TouchableOpacity style={this.styles.botao} onPress={() => {this.props.navigation.navigate('Financeiro')}} >
                    <View style={this.styles.botaoArea} >
                        <Text style={this.styles.text} >
                            {this.props.title}
                        </Text>
                    </View>
                </TouchableOpacity>
            </LinearGradient>
        );
    }
}