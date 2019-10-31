import React, { Component } from 'react';
import { View, Platform, StyleSheet, FlatList, ImageBackground } from 'react-native';

import MsgItem from "./src/MsgItem";

export default class App extends Component {
  
    constructor(props){
        super(props)
        this.state = {
            chat:[
                {key:'1', nome:'Mauricio', msg:'Oi.. voce vai hoje ?', m:true},
                {key:'2', nome:'Ana', msg:'Oi.. acho que sim', m:false},
                {key:'3', nome:'Mauricio', msg:'que horas voce vai?', m:true},
                {key:'4', nome:'Mauricio', msg:'é a noite, acho que a galera vai toda de uma vez, mas não tava querendo', m:true},
                {key:'5', nome:'Ana', msg:'acho que umas 20h', m:false},
                {key:'6', nome:'Mauricio', msg:'tudo bem vou te esperar la', m:true},
                {key:'7', nome:'Ana', msg:'ok, me espera na porta', m:false},
                {key:'8', nome:'Mauricio', msg:'ok, tchau', m:true},
                {key:'9', nome:'Ana', msg:'tchau', m:false}
            ]
        };
    }

    render() {
        return(
            <View style={styles.container} >
                <ImageBackground source={require('./assets/images/bg.jpg')} style={styles.chat} >
                    <FlatList 
                        data={this.state.chat}
                        renderItem={({item})=><MsgItem data={item} />}
                    />
                </ImageBackground>
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
