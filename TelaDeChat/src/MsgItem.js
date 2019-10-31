import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class MsgItem extends Component {
  
    constructor(props){
        super(props);
        this.estilo = styles.balaoEsquerdo;
        if (props.data.m){
            this.estilo = styles.balaoDireito;
        }
    }

    render() {
        return(
            <View style={[styles.balao, this.estilo]} >
                <Text style={styles.nome} >{this.props.data.nome}</Text>
                <Text>{this.props.data.msg}</Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    balao:{
        backgroundColor:'#ff0000',
        margin:10,
        padding:10,
        borderRadius:10
    },
    balaoEsquerdo:{
        backgroundColor:'#F0FFF0',
        alignSelf:'flex-start',
        marginRight:80
    },
    balaoDireito:{
        backgroundColor:'#98FB98',
        alignSelf:'flex-end',
        marginLeft:80
    },
    nome:{
        fontSize:15,
        fontWeight:'bold'
    }
});
