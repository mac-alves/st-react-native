import React, { Component } from 'react';
import { View, Platform, StyleSheet, FlatList, ImageBackground } from 'react-native';

export default class Financeiro extends Component {
  
    static navigationOptions = {
        title:'Financeiro'
    }

    constructor(props){
        super(props)
        this.state = {

        };
    }

    render() {
        return(
            <View style={styles.container} >
                
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:(Platform.OS == 'ios') ? 20 : 0
    },
    chat:{
        flex:1
    }
});

/*
dados financeiros
  Salario (slider 200 a 300)
  Banco piker
  qt. de cartões (-3+)

botão salvar.
*/